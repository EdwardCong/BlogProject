import Head from 'next/head'
import Layout from "../../components/layout"
import Date from "../../components/date"
import { postIds, postData } from "../../lib/posts"
import utilStyles from "../../styles/utils.module.css"

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingx1}>{post.title}</h1>
        <Date date={post.date} />
        <div dangerouslySetInnerHTML={{__html: post.contentHtml}} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = postIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await postData(params.id)
  return {
    props: {
      post
    }
  }
}