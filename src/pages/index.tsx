import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
      <div className="bg-blue-200 hidden md:block md:row-span-2 md-span-3">category desktop</div>
      <div className="bg-blue-200 hidden md:block md:col-span-9">sort desktop</div>
      <div className="bg-blue-200 md:col-span-9">blogs</div>
    </div>
  )
}

export default Home
