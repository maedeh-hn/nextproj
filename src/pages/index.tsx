import type { NextPage } from 'next'
import {ChevronDoenIcon} from "@heroicons/react/outline"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 w-full">
      <div className="bg-[aliceblue] hidden md:block md:row-span-2 md:col-span-3">
        <div>
          <div>دسته بندی مقالات</div>
          <div></div>
        </div>
      </div>
      <div className="bg-[aliceblue] hidden md:block md:col-span-9">sort desktop</div>
      <div className="bg-[aliceblue] md:col-span-9">blogs</div>
    </div>
  )
}

export default Home
