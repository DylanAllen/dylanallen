import * as React from 'react'
import Head from 'next/head'
import NavMenu from './NavMenu'
import { motion } from 'framer-motion';
import { Nav } from 'grommet';
import { auth } from '../utils/auth';
import {Github, StackOverflow, Linkedin, Login, Logout} from 'grommet-icons';
import { Context } from '../pages/_app';
import { useContext } from 'react';

type Props = {
  children: React.ReactChild[] | React.ReactChild
  title?: string;
}

let easing = [0.175, 0.85, 0.42, 0.96];

const textVariants = {
  exit: { opacity: 0, transition: { duration: 0.2, ease: easing } },
  enter: {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.2, ease: easing }
  }
};

const Layout: React.FunctionComponent<Props> = (props) => {

  const state = useContext(Context);

  const { children } = props;
  const title = props.title || 'Dylan Allen | JavaScript Developer | Frontend Web | React | Serverless';

  const onLogin = () => {
    auth.login().then((newUser) => {
      state.updateState({user: newUser});
    });
  }

  const onLogout = () => {
    auth.logout().then(() => {
      state.updateState({user: null});
    })
  }

    return (
      <div >
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main id="main">
          <header className="container">
            <NavMenu></NavMenu>
          </header>
          <div className="container maincontainer">
          <motion.div initial="exit" animate="enter" exit="exit">
            <motion.div variants={textVariants}>
              {children}
            </motion.div>
          </motion.div>
          </div>
          <footer className="container">
            <Nav direction="row">
              <a href="https://github.com/DylanAllen" ><Github a11yTitle="Github" /></a>
              <a href="https://stackoverflow.com/story/dylanallen"><StackOverflow a11yTitle="StackOverflow"/></a>
              <a href="https://www.linkedin.com/in/dylanallen/"><Linkedin a11yTitle="Linkedin"/></a>
              {!state.user && <a onClick={onLogin} title="Login"><Login /></a>}
              {state.user && <a onClick={onLogout} title="Logout"><Logout /></a>}
              <span>{state.user?.displayName}</span>
            </Nav>
          </footer>
        </main>
      </div>
    )
  }
export default Layout
