import { connectToDatabase } from "../util/mongodb";
import Date from "../components/date"
import Link from "next/link"

// Displays posts, received as props from Home page
async function Posts({ posts }) {
  // make new post using api <will move this away later, this page is only intended to display posts>
  const makePost = async () => {
    const data = await fetch(`http://localhost:3000/api/make-one`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: "YES",
        date: "2021-07-19",
        body: "YAPP blah blah blah"
      })
    })
  }
  // Display all posts
  return (
    <div>
      <h1>
        Blog Posts
      </h1>
      {posts.map((post) => (
        <div>
          <Link href={`/posts/${post._id}`}>
            <a><h2>{post.title}</h2></a>
          </Link>
          <Date date={post.date} />
          <p>{post.body}</p>

        </div>
      ))}
    </div>
  );
}

// export async function getAllPostIds() {
//   const { db } = await connectToDatabase();
//   const posts = await db
//     .collection("posts")
//     .find({})
//     .toArray()

//   return posts.map((post) => {
//     return {
//       params: {
//         id: post._id
//       }
//     }
//   })
// }

// export async function getPostData(id) {
//   const res = await fetch(`localhost:3000/api/get-one?id=${id}`)
//   const post = await res.json()

//   return {
//     id,
//     ...post
//   }
// }

export default Posts