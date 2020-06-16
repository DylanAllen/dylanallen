import Layout from '../components/Layout'
import { Heading, Paragraph, WorldMap } from 'grommet';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {

  return (
  <Layout>
    <Heading>Dylan Allen</Heading>
    <Paragraph>
      New site in progress.
    </Paragraph>
    <WorldMap
      color="neutral-1"
      continents={[
        {
          name: 'North America',
          color: 'light-5',
          onClick: () => {},
        },
      ]}
      places={[
        {
          name: 'Sydney',
          location: [-33.8830555556, 151.216666667],
          color: 'accent-2',
          onClick: () => {},
        },
      ]}
    />
  </Layout>
)}

export default IndexPage
