import * as React from 'react'
import { useEffect } from 'react'
import Head from 'next/head'
import NavMenu from './NavMenu'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from './Footer';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactChild[] | React.ReactChild
  title?: string;
  image?: string;
  description?: string;
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

  const { children, image } = props;
  const title = props.title || 'Dylan Allen | JavaScript Engineer | Frontend Web | React | Serverless';
  const description = props.description || "I am a frontend web developer in Tulsa, OK. I like to work with React, VueJS, and TypeScript. I have experience developing lambda functions, and really like serverless architecture. My DB experience is mostly NoSQL (DynamoDB & FireStore).";
  const router = useRouter();
  const postGtag = (url: string) => {
    if (process.env.NODE_ENV === 'development') return null;
    let win = window as any;
    win.gtag('config', win.ga_id, {'page_path': url});
  }

  useEffect(() => {
    router.events.on('routeChangeStart', postGtag);
    return () => {
      router.events.off('routeChangeStart', postGtag);
    }
  })

  useEffect(() => {
    let cancel = false;
    return () => {cancel = true};
  })
  
    return (
      <div >
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content={description} />
          { image && <meta property="og:image" content={image}></meta>  }
          { image && <meta property="twitter:image" content={image}></meta> }
          <meta property="og:title" content={title}></meta>
          { props.description && <meta property="og:description" content={props.description}></meta> }
        </Head>
        <main id="main">
          <header id="mainheader" className="container">
            <Link href="/">
              <a>
                <img alt="DA Logo" src="/da-purple.png" className="headerlogo" style={{height: "42.4px", width: "40px" }}></img>
                {/* <ContactInfo className="headerlogo" style={{height: "40px", width: "40px" }} /> */}
              </a>
            </Link>
            <NavMenu></NavMenu>
          </header>
          <div className="maincontainer">
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
