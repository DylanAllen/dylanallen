import Layout from '../components/Layout'
import { NextPage } from 'next';
import PostList from '../components/PostList';
import TypedText from '../components/TypedText';
import { useEffect, useState } from 'react';

const techStack = {
  JavaScript: 6,
  React: 5,
  VueJS: 5,
  Angular: 4,
  'CSS/SCSS': 5,
  TypeScript: 5,
  NodeJS: 4,
  AWS: 4,
  Design: 3,
  DynamoDB: 5,
  Lambda: 4,
  CloudFormation: 4,
  Python: 3,
  'API Gateway': 3,
  'Serverless Framework': 4,
  'Serverless Architecture': 3,
  FireStore: 3,
  CloudFront: 3,
  Cognito: 3,
  'AWS Lex': 4,
  Redux: 2
}

let techArr = [];
for (const word in techStack) {
  techArr.push(word);
}

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
    <section id="pageheader" className="container">
      <h1 className="big-heading">Dylan Allen</h1>
      <TypedText className="tagline" text="JavaScript Developer" />
    </section>
    <section className="inverted">
      <div className="introtext container">
        <p>
          Good {greeting}{(visitor) ? ', and welcome back!': ','} I am a <strong>frontend web developer</strong> in <em><a href="https://en.wikipedia.org/wiki/Tulsa,_Oklahoma">Tulsa, OK</a></em>.
          I like to work with React(this site is built with React) and VueJS, but my day job is Angular. I have experience developing lambda functions, and really like serverless architecture. My DB experience is mostly NoSQL (DynamoDB & FireStore).
        </p>
      </div>
    </section>
    <section className="techStack container">
      <h1>Tech stack</h1>
      <div className="wordGrid">
        {Object.entries(techStack).map(tech => <span className={'techLevel l' + tech[1]} key={tech[0]}>{tech[0]}</span>)}
      </div>
    </section>
    <section id="posts" className="container">
      <h1>Latest Posts</h1>
      <PostList
        className="style2"
        imgHeight="220px"
        imgWidth="300px">
      </PostList>
    </section>
  </Layout>
)}

export default IndexPage
