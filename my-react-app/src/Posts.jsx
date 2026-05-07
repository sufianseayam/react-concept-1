import Post from './post';
import { use } from 'react';
export default function Posts({postsPromise}) {
    const posts = use(postsPromise);
    console.log(posts);
    return(
        <div className="card">
            <h2>All posts are here : {posts.length}</h2>
            {
                posts.map(post => <Post  post={post}></Post>)
            }

        </div>
    )
}