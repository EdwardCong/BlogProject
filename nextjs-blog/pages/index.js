import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import posts from '../lib/posts'

// return allData as props for Home 
export async function getStaticProps() {
  const allData = await posts()
  return {
    props: {
      allData
    }
  }
}

export default function Home({ allData }) {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hello, I am Edward. I am a new grad from Lassonde School of Engineering, York University.
          I am an aspiring Computer Engineer.
        </p>
        <p>
          This website was created using a template which you can find and use to build your own at {' '}
          <a href="https://nextjs.org/learn">this Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <a>{title}</a>
              </Link>
              <br />
              <Date date={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}