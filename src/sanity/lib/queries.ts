import { defineQuery } from 'next-sanity';

const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export { POSTS_QUERY, POST_QUERY };
