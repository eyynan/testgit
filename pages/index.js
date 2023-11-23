import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todo from './components/Todo'
import useSWR from "swr"

export default function Home() {
  // const { data:todos, mutate }=useSWR("api/todos")
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {}
      <Todo />
    </div>
  )
}
