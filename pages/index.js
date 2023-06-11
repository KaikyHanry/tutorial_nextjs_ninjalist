import Head from 'next/head'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninkas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Paragrafo aleatório so para ver se ta funcionando</p>
        <p className={styles.text}>Paragrafo aleatório so para ver se ta funcionando</p>
        <Link legacyBehavior href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
