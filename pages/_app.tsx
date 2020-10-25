import '../assets/style.scss';
import { AnimatePresence } from 'framer-motion';
import App, { AppProps } from 'next/app'
import { initApp } from '../utils/firebase';
import { auth } from '../utils/auth';
import React from 'react';
import Toast from '../components/Toast';

export interface StateType {
  user?: firebase.User | null;
  updateState: (state: StateFragment) => void;
  loaded?: boolean;
  toastMessage?: string;
  toastColor?: string;
}

export interface StateFragment {
  user?: firebase.User | null;
  updateState?: (state: StateType) => void;
  loaded?: boolean;
  toastMessage?: string;
  toastColor?: string;
}

const initialState: StateType = {
  user: null,
  updateState: () => {},
  loaded: false
}

export const Context: React.Context<StateType> = React.createContext(initialState)

export default class MyApp extends App {

  state: StateType = {
    user: null,
    updateState: (state: StateFragment) => {
      this.setState(state);
    },
    toastMessage: '',
    toastColor: ''
  }

  constructor(props: AppProps) {
    super(props);
    initApp();
    auth.init();
  }

  componentDidMount() {
    if (!this.state.user) {
      window.addEventListener('userUpdate', (user: CustomEventInit) => {
        this.setState({user: user.detail});
      });
    }
    if (!this.state.loaded) {
      this.setState({loaded: true});
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <AnimatePresence exitBeforeEnter>
          <Context.Provider value={this.state}>
            <Component {...pageProps} key={router.route} />
          </Context.Provider>
        </AnimatePresence>
      <Toast message={this.state.toastMessage} color={this.state.toastColor}/>
      </>
    )
  }
}