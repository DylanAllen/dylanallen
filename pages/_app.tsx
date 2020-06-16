import { Grommet } from 'grommet'
import '../assets/style.scss';
import { theme } from '../assets/theme';
import { AnimatePresence } from 'framer-motion';
import App, { AppProps } from 'next/app'
import { initApp } from '../utils/firebase';
import { authState, auth } from '../utils/auth';
import React from 'react';

export interface StateType {
  user?: firebase.User | null;
  changeUser: (user: firebase.User | null) => void;
  loaded?: boolean;
}

const initialState: StateType = {
  user: null,
  changeUser: (user: firebase.User | null) => console.log(user),
  loaded: false
}

export const UserContext: React.Context<StateType> = React.createContext(initialState)

export default class MyApp extends App {

  state: StateType = {
    user: null,
    changeUser: (user: firebase.User | null) => {
      this.setState({user: user});
    }
  }

  constructor(props: AppProps) {
    super(props);
    initApp();
    auth.init();
  }

  componentDidMount() {
    if (!this.state.user) {
      authState.user$.subscribe(user => {
        if (user != this.state.user) {
          this.setState({user: user});
        }
      })
    }
    if (!this.state.loaded) {
      console.log(this.state);
      this.setState({loaded: true});
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Grommet theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <UserContext.Provider value={this.state}>
            <Component {...pageProps} key={router.route} />
          </UserContext.Provider>
        </AnimatePresence>
      </Grommet>
    )
  }
}

