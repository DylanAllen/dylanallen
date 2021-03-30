import "../assets/style.scss";
import { AnimatePresence } from "framer-motion";
import App, { AppProps } from "next/app";
import { initApp } from "../utils/firebase";
import { auth } from "../utils/auth";
import React from "react";
import Toaster, { ToastInput, ToastStatusType } from "../components/Toast";
import "./prism.css";
import firebase from "firebase/app";
import "firebase/auth";

export interface StateType {
  user?: firebase.User | null;
  updateState: (state: StateFragment) => void;
  loaded?: boolean;
  toast: (message: string, status?: ToastStatusType) => void;
  toastValue: ToastInput;
}

export interface StateFragment {
  user?: firebase.User | null;
  updateState?: (state: StateType) => void;
  loaded?: boolean;
  toast?: (message: string, status?: ToastStatusType) => void;
  toastValue?: ToastInput;
}

const initialState: StateType = {
  user: null,
  updateState: () => {},
  loaded: false,
  toast: (message) => {
    console.log(message);
  },
  toastValue: { message: "" },
};

export const Context: React.Context<StateType> = React.createContext(
  initialState
);

export default class MyApp extends App {
  state: StateType = {
    user: null,
    updateState: (state: StateFragment) => {
      this.setState(state);
    },
    toast: (message: string, status?: ToastStatusType) => {
      this.setState({
        toastValue: {
          message: message,
          status: status ? status : undefined,
        },
      });
    },
    toastValue: { message: "" },
  };

  constructor(props: AppProps) {
    super(props);
    initApp();
    auth.init();
  }

  componentDidMount() {
    if (!this.state.user) {
      window.addEventListener("userUpdate", (user: CustomEventInit) => {
        this.setState({ user: user.detail });
      });
    }
    if (!this.state.loaded) {
      this.setState({ loaded: true });
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
        <Toaster toastInput={this.state.toastValue} />
      </>
    );
  }
}
