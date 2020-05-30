import App from 'next/app'
import { Grommet } from 'grommet'
import '../assets/style.scss';
import { theme } from '../assets/theme';

export default class MyApp extends App {
  
  render() {
    const { Component, pageProps } = this.props
    return (
      <Grommet theme={theme}>
        <Component {...pageProps} />
      </Grommet>
    )
  }
}