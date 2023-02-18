import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Next App</title>
      </Head>
      <Link href="/about">About</Link>
      <h1 className={styles.homePageTitle}>hello world</h1>
    </div>
  )
}
