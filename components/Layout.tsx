import * as React from 'react'
import Head from 'next/head'
import NavMenu from './NavMenu'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from './Footer';

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

  const { children } = props;
  const title = props.title || 'Dylan Allen | JavaScript Developer | Frontend Web | React | Serverless';

    return (
      <div >
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,500&family=Source+Code+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap" rel="stylesheet"></link>
        </Head>
        <main id="main">
          <header id="mainheader" className="container">
            <Link href="/">
              <a>
                <img src="/da-purple.png" className="headerlogo" style={{height: "40px", width: "40px" }}></img>
                {/* <ContactInfo className="headerlogo" style={{height: "40px", width: "40px" }} /> */}
              </a>
            </Link>
            <NavMenu></NavMenu>
          </header>
          <div className="container maincontainer">
          <motion.div initial="exit" animate="enter" exit="exit">
            <motion.div variants={textVariants}>
              {children}
            </motion.div>
          </motion.div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
export default Layout
