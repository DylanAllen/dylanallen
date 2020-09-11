import Layout from '../components/Layout'
import { NextPage } from 'next';
import TypedText from '../components/TypedText';
import { ReactNode, useState, useEffect, useCallback } from 'react';
import { Close } from 'grommet-icons';

const techStack = {
  JavaScript: 6,
  React: 5,
  VueJS: 5,
  Angular: 4,
  TypeScript: 5,
  'CSS/SCSS': 3,
  NodeJS: 4,
  AWS: 4,
  UX: 3,
  DynamoDB: 5,
  Lambda: 4,
  CloudFormation: 4,
  Python: 3,
  'API Gateway': 3,
  'Serverless Framework': 4,
  'Serverless Architecture': 4,
  FireStore: 3
}

let techArr = [];
for (const word in techStack) {
  techArr.push(word);
}

interface ModalProps {
  children?: ReactNode;
  show?: boolean;
  close: Function
}

const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const { show, children, close } = props;

  const ModalContent: React.FunctionComponent<ModalProps> = ({ children, close }) => {
    const escFunction = useCallback((event) => {
      if(event.keyCode === 27) {
        close();
      }
    }, []);

    useEffect(() => {
      document.addEventListener("keydown", escFunction, false);
      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
    }, []);

    return (<div className="content">
      {children} 
    </div>)
  }
  
  return (<div>
    {(show == true) && <div className="modal">
      <Close className="closeModal" onClick={() => close()} color="#ffffff"></Close>
      {(show === true) && <ModalContent close={close}>{children}</ModalContent>}
    </div>}
  </div>)
}

const Resume: NextPage = () => {

  const [noiiiceModal, setNoiiiceModal] = useState(false);
  const [lkModal, setLKModal] = useState(false)

  return (
  <Layout>
    <section id="pageheader" className="container">
      <h1 className="big-heading">Dylan Allen</h1>
      <TypedText className="tagline" text="JavaScript Developer" />
    </section>
    <section className="inverted">
      <div className="introtext container">
        <p>
          I am a <strong>frontend web developer</strong> in <em><a href="https://en.wikipedia.org/wiki/Tulsa,_Oklahoma">Tulsa, OK</a></em>.
          I like to work with React(this site is built with React) and VueJS, but my day job is Angular. I have experience developing lambda functions, and really like serverless architecture. My DB experience is mostly NoSQL (DynamoDB & FireStore).
        </p>
      </div>
    </section>
    <section className="techStack container">
      <h1>Tech</h1>
      <div className="wordGrid">
        {Object.entries(techStack).map(tech => <span className={'techLevel l' + tech[1]} key={tech[0]}>{tech[0]}</span>)}
      </div>
    </section>
    <section className="projects inverted">
      <div className="container">
        <h1>Projects</h1>
        <div className="project">
          <h2>Noiiice</h2>
          <p>
            Noiiice is an open source blog platform built with the Serverless framework, NuxtJS, AWS Lambda, DynamoDB, API Gateway, S3, and Cognito. The serverless architecture provides fast performance, virtually infinite scalability, and very cheap to operate.
          </p>
          <button className="projectButton" onClick={() => setNoiiiceModal(true)}>Demo Video</button>
          <Modal show={noiiiceModal} close={() => setNoiiiceModal(false)}>
            <div className="videoContainer">
              <iframe src="https://player.vimeo.com/video/362037476" className="videoFrame" allow="autoplay; fullscreen"></iframe>
            </div>
          </Modal>
        </div>
        <div className="project">
          <h2>Lexi's Kitchen</h2>
          <p>
            Some time ago we had a problem using perishable food before it expired. That gave me the idea for an alexa skill that we could use to add perishable items and their expiration date, and easily check what is expiring next without digging through the fridge. And so I built Lexi's Kitchen.
          </p>
          <p>A skill alone wasn't good enough, so I built a companion web app with account linking so I can manage the list from my phone while I am shopping.</p>
          <button className="projectButton" onClick={() => setLKModal(true)}>Demo Video</button>
          <Modal show={lkModal} close={() => setLKModal(false)}>
            <div className="videoContainer">
              <iframe src="https://player.vimeo.com/video/456787498" className="videoFrame" allow="autoplay; fullscreen"></iframe>
            </div>
          </Modal>
        </div>
        <div className="project">
          <h2>Udon</h2>
        </div>
      </div>
    </section>
    <section className="experience">
      <h1 className="container">Experience</h1>
      <div className="experience-container">

        <div className="">
          <div className="job-block container">
            <h2 className="job-header">
              BOK Financial<span className="title-sep"> | </span><span className="duration">Mar 2020 - Present</span>
            </h2>
            <div className="job-title">
              Software Developer III, VP
            </div>
            <p className="job-description">
              Frontend development (Angular8) on a new commercial web portal built on the Backbase platform.
            </p>
          </div>
        </div>

        <div className="inverted">
          <div className="job-block container">
            <h2 className="job-header">
              VoiceFoundry<span className="title-sep"> | </span><span className="duration">Nov 2018 - Mar 2020</span>
            </h2>
            <div className="job-title">
              Software Developer
            </div>
            <p className="job-description">
              Amazon Connect development and implementation for various clients.
            </p>
            <p className="job-description">
              Develop Connect contact flows, Lex bots, lambda functions, and web applications for enterprise contact center solutions.
            </p>
          </div>
        </div>

        <div className="">
          <div className="job-block container">
            <h2 className="job-header">
              Hampton Creative<span className="title-sep"> | </span><span className="duration">Feb 2017 - Nov 2018</span>
            </h2>
            <div className="job-title">
              Senior Web Programmer
            </div>
            <p className="job-description">
            Developed websites that meet each project's design and function requirements.<br/>
            Worked with clients to gather requirements and scope web projects.<br/>
            Web App Development<br/>
            Wordpress Theme & Plugin development<br/>
            SEO | WooCommerce | BigCommerce | Shopify
            </p>
          </div>
        </div>

        <div className="inverted">
          <div className="job-block container">
            <h2 className="job-header">
              Webco Industries<span className="title-sep"> | </span><span className="duration">May 2016 - Feb 2017</span>
            </h2>
            <div className="job-title">
              Inventory Analyst
            </div>
            <p className="job-description">
              Responsible for stainless tubing inventory management.
            </p>
            <p className="job-description">
              Developed material stocking strategies for stainless tubing, and created an audit system to ensure that all materials were compliant with their strategy specifications.
            </p>
            <p className="job-description">
              Lead weekly inventory management meetings, identified issues, and delegated tasks. Lead efforts that resulted in a 14% reduction in aged inventory, and hit monthly inventory turns targets for 5 consecutive months.
            </p>
          </div>
        </div>

        <div className="">
          <div className="job-block container">
            <h2 className="job-header">
              Baker Hughes<span className="title-sep"> | </span><span className="duration">Feb 2011 - Nov 2015</span>
            </h2>
            <div className="job-title">
              Project Manager/Business Development Manager
            </div>
            <p className="job-description">
              Received Core Value Award for leading North America wide, interdepartmental team in a project to design and implement a new order processing and tracking solution.
            </p>
            <p className="job-description">
              Created inventory management tools that instantly pull, scrub, and analyze data used by the sales team to proactively sell slow moving stock. This increased inventory turnover and lowered inventory holding costs.
            </p>
            <p className="job-description">
              Redesigned SharePoint based solution used to create orders and track through quote, assembly, shipping, and billing. This system provides real time updates on order status and revenue estimates.
            </p>
            <p className="job-description">
              Supervised a team of 17 across 3 departments.
            </p>
            <p className="job-description">
              Worked with global team to create world-wide product sales forecast and material replenishment planning.
            </p>
          </div>
        </div>
        
      </div>
    </section>

    <section className="experience">
      <h1 className="container">Education</h1>
      <div className="experience-container">
        <div className="">
          <div className="job-block container">
            <h2 className="job-header">University of Tulsa</h2>
            <div className="job-title">
              Bachelor of Science in Business Administration
            </div>
            <p className="job-description">
              Major: Economics<br/>
              Minor: Finance
            </p>
          </div>
        </div>
      </div>
    </section>
    
  </Layout>
)}

export default Resume
