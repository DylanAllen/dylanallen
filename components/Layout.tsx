import * as React from 'react'
import Head from 'next/head'
import NavMenu from './NavMenu'
import { motion } from 'framer-motion';
import { Nav } from 'grommet';
import Link from './Link';
import { auth } from '../utils/auth';
import {Github, StackOverflow, Linkedin, Login, Logout} from 'grommet-icons';
import { Context } from '../pages/_app';
import { useContext } from 'react';

type Props = {
  children: React.ReactChild[]
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
      <div className={(state.loaded) ? 'loaded' : 'invisible'}>
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
              <Link href="https://github.com/DylanAllen" a11yTitle="Github"><Github /></Link>
              <Link href="https://stackoverflow.com/story/dylanallen" a11yTitle="StackOverflow"><StackOverflow /></Link>
              <Link href="https://www.linkedin.com/in/dylanallen/" a11yTitle="Linkedin"><Linkedin /></Link>
              {!state.user && <Link onClick={onLogin} a11yTitle="Login"><Login /></Link>}
              {state.user && <Link onClick={onLogout} a11yTitle="Logout"><Logout /></Link>}
              <span>{state.user?.displayName}</span>
            </Nav>
          </footer>
        </main>
      </div>
    )
  }
export default Layout
