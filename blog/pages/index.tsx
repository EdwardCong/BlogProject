import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Date from '../components/date'
import { connectToDatabase } from '../util/mongodb'
import { makePost } from '../util/makePost'
import { GetStaticProps } from 'next'

// TO-DO: sort the posts by date, complete TypeScript integration
export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>Edward's blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hello and welcome to my blog! I am Edward Cong, I am a new grad from Lassonde School of Engineering, York University.
          I created this blog using nextjs to improve my skills in front-end development and using the newest technologies. I plan
          on adding posts to showcase my personal projects. 
        </p>
        <button onClick= {() => void makePost("yep", "2021-08-06", "testing the function")}>Make a post</button>
        {posts.map((post) => (
        <div key={post._id}>
          <Link href={`/posts/${post._id}`}>
            <a><h2>{post.title}</h2></a>
          </Link>
          <Date date={post.created} />
          <p>{post.body}</p>

        </div>
      ))}
      </section>
    </Layout>

  )
}

// getStaticProps cannot make calls to Nextjs API routes because these functions are executed at build time, the server isn't running yet
export const getStaticProps: GetStaticProps = async () => {
  const { db } = await connectToDatabase();
  const posts = await db
    .collection("posts")
    .find({})
    .toArray()

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    },
  };
}
