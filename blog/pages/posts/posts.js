import { connectToDatabase } from "../../util/mongodb";
import Date from "../../components/date"
import Link from "next/link"

// Displays posts, received as props from Home page
export default function Posts({ posts }) {
  // make new post using api <will move this away later, this page is only intended to display posts>
  const makePost = async () => {
    const data = await fetch(`http://localhost:3000/api/make`, {
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
          <Link href={post._id}>
            <a><h2>{post.title}</h2></a>
          </Link>
          <Date date={post.date} />
          <p>{post.body}</p>

        </div>
      ))}
      {/* <button onClick={makePost}>POST</button> */}
    </div>
  );
}

// Make connection to database 
export async function getServerSideProps() {
  const conn = await connectToDatabase()
  return {
    props: {
    }
  }
}