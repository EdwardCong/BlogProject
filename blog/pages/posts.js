import { connectToDatabase } from "../util/mongodb";
// get all posts in the database
export default function Posts({ posts }) {
  // Post to api
  const makePost = async () => {
    const data = await fetch(`http://localhost:3000/api/make`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: "YES",
        date: "Mon Jul 19 2021 18:23:17 GMT-0400 (Eastern Daylight Time)",
        body: "YAPP blah blah blah"
      })
    })
  }
  // Get posts
  // const getPosts = async () => {
  //   const data = await fetch(`http://localhost:3000/api/get`)
  //   return data.posts
  // }

  return (
    <div>
      <h1>
        Blog Posts
      </h1>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
      <button onClick={makePost}>Post</button>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find({})
    .toArray()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    }
  }
}