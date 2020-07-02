import Layout from '../components/Layout'
import { NextPage } from 'next';
import PostList from '../components/PostList';
import TypedText from '../components/TypedText';
import { useEffect, useState } from 'react';

const IndexPage: NextPage = () => {

  const getGreetingTime: () => string = () => {
    const dt = new Date();
    var hour = dt.getHours()
    if (hour < 12) return 'morning'
    if (hour < 18) return'afternoon'
    return 'evening'
  }

  const rememberVisitor: () => boolean = () => {
    let visitor = localStorage.getItem('visitor')
    if (visitor) return true;
    localStorage.setItem('visitor','true');
    return false;
  }

  const [greeting, setGreeting] = useState('');
  const [visitor, setVisitor] = useState(false);

  useEffect(() => {
    setGreeting(getGreetingTime());
    setVisitor(rememberVisitor());
  },[])

  return (
  <Layout>
    <section id="pageheader">
      <h1 className="big-heading">Dylan Allen</h1>
      <TypedText className="tagline" text="JavaScript Developer" />
    </section>
    <section className="inverted">
      <div className="introtext">
        <p>
          Good {greeting}{(visitor) ? ', and welcome back!': ','} I am a <strong>frontend web developer</strong> in <em><a href="https://en.wikipedia.org/wiki/Tulsa,_Oklahoma">Tulsa, OK</a></em>.
          My faves are React(this site is built with React) and VueJS, but my day job is all Angular lately. I have experience developing lambda functions, and really like serverless architecture. My DB experience is mostly NoSQL (DynamoDB & FireStore).
        </p>
      </div>
    </section>
    <section id="posts">
      <h1>Latest Posts</h1>
      <PostList></PostList>
    </section>
  </Layout>
)}

export default IndexPage
