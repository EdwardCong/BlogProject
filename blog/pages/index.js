import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/layout"
import Posts from "./posts/posts"
import { connectToDatabase } from '../util/mongodb'
import utilStyles from "../styles/utils.module.css"

export default function Home({ posts }) {

  return (
    <Layout home>
      <Head>
        <title>Edward's blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hello, I am Edward. I am a new grad from Lassonde School of Engineering, York University.
          I am an aspiring Computer Engineer.
        </p>
        <p>
          This website was created with
          <pre><code>npx create-next-app --example with-mongodb "your-project-name"</code></pre>
          to have mongodb integration, and following a tutorial which you can find and use to build your own at {' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
      </section>
      <Posts posts={posts} />
    </Layout>
  )
}

// Query database to get the posts, use this prop for the "Posts" page
export async function getStaticProps(context) {
  const { client } = await connectToDatabase()
  const res = await fetch(`http://localhost:3000/api/get`)
  const posts = await res.json()

  return {
    props: { posts }
  }
}
