import { client } from '@/src/sanity/lib/client';
import { POSTS_QUERY } from '@/src/sanity/lib/queries';

async function Posts() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          <a href={`/posts/${post?.slug?.current}`}>{post?.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
