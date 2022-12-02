import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import PostList from "@/component/posts/PostList";


const Home: NextPage = ({blogsData,postCategoreis}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(blogsData);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,1fr)] ">
          <div className=" hidden md:block md:row-span-2 md:col-span-3">
            <div className="bg-white rounded-3xl overflow-hidden">
              <div
                className="flex items-center justify-between py-2 px-4 cursor-pointer bg-purple-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>دسته بندی مقالات</span>
                <ChevronDownIcon
                  className={`w-6 h-6 stroke-purple-400 transition-all duration-200 ${
                    isOpen ? "rotate-180" : "ratate-0"
                  }`}
                />
              </div>
              <div className={`${isOpen ? "block" : "hidden"}`}>
                <Link href="/blogs">
                  <a className="pr-4 block py-1 mb-1">همه مقالات</a>
                </Link>
{postCategoreis.map((category:any,index:string)=>{
                 return( <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
                 <a className="pr-4 block py-1 mb-1"> {category.title}</a>
               </Link>)
})}
              </div>
            </div>
          </div>
          <div className=" hidden md:block md:col-span-9">
            <div className="flex items-center bg-white rounded-3xl px-4">
              <div className="flex gap-x-2 items-center ml-4">
                <AdjustmentsVerticalIcon className="w-6 h-6" />
                <span>مرتب سازی:</span>
              </div>
              <ul className="flex items-center gap-x-4">
                <li className="py-4  text-gray-700 font-bold cursor-pointer">
                  پربازدیدترین
                </li>
                <li className="py-4 text-gray-700 font-bold cursor-pointer">
                  محبوب ترین
                </li>
                <li className="py-4 text-gray-700 font-bold cursor-pointer">
                  جدیدترین
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:col-span-9 grid grid-cols-6 gap-8">
<PostList blogsData={blogsData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) =>  { 
 const {data:result}= await axios.get("http://localhost:5000/api/posts")
 const {data:postCategoreis}= await axios.get("http://localhost:5000/api/post-category")
 const {data}=result
  return {
    props: {
      blogsData:data,
      postCategoreis:postCategoreis.data
    }, // will be passed to the page component as props
  }
}