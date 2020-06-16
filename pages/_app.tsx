import { Grommet } from 'grommet'
import '../assets/style.scss';
import { theme } from '../assets/theme';
import { AnimatePresence } from 'framer-motion';
import App, { AppProps } from 'next/app'
import { initApp } from '../utils/firebase';
import { authState, AuthState } from '../utils/auth';
import React from 'react';

export interface StateType {
  user?: firebase.User | null;
  changeUser: (user: firebase.User | null) => void 
}

initApp()

const initialState: StateType = {
  user: null,
  changeUser: (user: firebase.User | null) => console.log(user)
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
  }

  componentDidMount() {
    if (!this.state.user) {
      authState.user$.subscribe(user => {
        if (user != this.state.user) {
          this.setState({user: user});
        }
      })
    }
  }

  updateState(newData: AuthState) {
    this.state = {...this.state, ...newData};
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

