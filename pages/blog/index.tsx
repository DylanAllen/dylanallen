import Layout from '../../components/Layout'
import { Heading, Paragraph } from 'grommet';
import { meta as P1 } from './first';
import { meta as P2 } from './second';
import { meta as P3 } from './third';
import { MetaType } from '../../interfaces';
import Link from '../../components/Link';

let posts: MetaType[] = [
    P1,
    P2,
    P3
]

const Blog: React.FunctionComponent = () => {

    const PostCard: React.FunctionComponent<{post: MetaType}> = ({ post }) => {
        return (
            <div>
                <Heading level={3}>{post.title}</Heading>
                <Paragraph>{post.description}</Paragraph>
                <Link path={`/blog/${post.slug}`}>View Post</Link>
            </div>
        )
    }

    return (
        <Layout title="Blog | Dylan Allen | JavaScript Developer | Frontend Web">
            <Heading>Blog</Heading>
            <Paragraph>
            this is my blog
            </Paragraph>
            <Paragraph>
            not much to say.
            </Paragraph>
            {posts.map(post => <PostCard post={post} key={post.slug}></PostCard>)}
        </Layout>
    )
}

export default Blog
