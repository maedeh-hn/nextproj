import type { NextPage } from 'next'
import {ChevronDownIcon} from "@heroicons/react/24/outline"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
 
  return (
    <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 bg-gray-100">
      <div className=" hidden md:block md:row-span-2 md:col-span-3">
        <div className="bg-white rounded-3xl">
          <div className='flex items-center justify-between'>
            <span>دسته بندی مقالات</span>
            <ChevronDownIcon className='w-6 h-6 stroke-orange-400'/>
          </div>
          <div>
            <Link href="#">
              <a className='block py-1 mb-1'>همه مقالات</a>
            </Link>
            <Link href="#">
              <a className='block py-1 mb-1'> ری اکت</a>
            </Link>
            <Link href="#">
              <a className='block py-1'> جاوا اسکریپت</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-200 hidden md:block md:col-span-9">sort desktop</div>
      <div className="bg-blue-200 md:col-span-9">blogs</div>
    </div>
  )
}

export default Home
