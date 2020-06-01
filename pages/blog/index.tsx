import Layout from '../../components/Layout'
import { Heading, Paragraph, Box, Image } from 'grommet';
import { meta as P1 } from './first';
import { meta as P2 } from './second';
import { meta as P3 } from './third';
import { MetaType } from '../../interfaces';
import Link from '../../components/Link';
import { getImage } from '../../utils/firebase';
import { useState, useEffect } from 'react';

let posts: MetaType[] = [
    P1,
    P2,
    P3
]

const PostCard: React.FunctionComponent<{post: MetaType}> = ({ post }) => {
        
    const [url, setImg] = useState('');
    
    useEffect(() => {
        if (post.image) {
            (async () => {
                const img = await getImage(post.image);
                setImg(img);
            })
        }
    },[]);

    return (
        <article className="post-summary">
            <Heading level={3}>{post.title}</Heading>
            <Paragraph>{post.description}</Paragraph>
            { url && <Image fit="cover" src={url} /> }
            <Link path={`/blog/${post.slug}`}>View Post</Link>
        </article>
    )
}

const Blog: React.FunctionComponent = () => {



    return (
        <Layout title="Blog | Dylan Allen | JavaScript Developer | Frontend Web">
            <Heading>Blog</Heading>  
            <Box className="post-list">
                {posts.map(post => <PostCard post={post} key={post.slug}></PostCard>)}
            </Box>
        </Layout>
    )
}

export default Blog
