import '../assets/style.scss';
import { AnimatePresence } from 'framer-motion';
import App, { AppProps } from 'next/app'
import { initApp } from '../utils/firebase';
import { authState, auth } from '../utils/auth';
import React from 'react';

export interface StateType {
  user?: firebase.User | null;
  updateState: (state: StateFragment) => void;
  loaded?: boolean;
}

export interface StateFragment {
  user?: firebase.User | null;
  updateState?: (state: StateType) => void;
  loaded?: boolean;
}

const initialState: StateType = {
  user: null,
  updateState: (state: StateFragment) => console.log(state),
  loaded: false
}

export const Context: React.Context<StateType> = React.createContext(initialState)

export default class MyApp extends App {

  state: StateType = {
    user: null,
    updateState: (state: StateFragment) => {
      this.setState(state);
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
        <AnimatePresence exitBeforeEnter>
          <Context.Provider value={this.state}>
            <Component {...pageProps} key={router.route} />
          </Context.Provider>
        </AnimatePresence>
    )
  }
}

