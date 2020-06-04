import App from 'next/app'
import { Grommet } from 'grommet'
import '../assets/style.scss';
import { theme } from '../assets/theme';
import { AnimatePresence } from 'framer-motion';

export default class MyApp extends App { 
  
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Grommet theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Grommet>
    )
  }
}