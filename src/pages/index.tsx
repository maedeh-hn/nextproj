import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  HeartIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const Home: NextPage = ({blogsData}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isOpen, setIsOpen] = useState(false);
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
                <Link href="#">
                  <a className="pr-4 block py-1 mb-1">همه مقالات</a>
                </Link>
                <Link href="#">
                  <a className="pr-4 block py-1 mb-1"> ری اکت</a>
                </Link>
                <Link href="#">
                  <a className="pr-4 block py-1"> جاوا اسکریپت</a>
                </Link>
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
            {[
              "next.png",
              "nodejs.webp",
              "nuxt.png",
              "vuejs.png",
              "nuxt.png",
              "vuejs.png",
            ].map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 max-w-[600px] w-full flex flex-col  relative"
                >
                  <div className="max-w-[600px] w-full rounded-3xl">
                    <img
                      src={`/images/${item}`}
                      className="w-full h-[150px] object-cover rounded-3xl"
                    />
                  </div>
                  <div className="bg-gray-50 p-2 rounded-2xl mt-5 flex flex-col justify-between flex-1">
                    <h2 className="mb-4 font-bold">
                      بررسی کامل ری اکت و ریداکس sghl sghsl sghsk sjs shjs bjbd
                      sbfb skbfhh
                    </h2>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src="/images/vuejs.png"
                            alt=""
                            className="w-6 h-6 rounded-full ring-2 ring-white ml-2"
                          />
                          <span className="text-sm">شیوا مرادی</span>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-xl bg-blue-300 text-blue-600 cursor-pointer">
                          ری اکت
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center">
                          <HeartIcon className="w-6 h-6" />
                          <BookmarkIcon className="w-6 h-6" />
                          <ChatBubbleBottomCenterIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-gray-500 text-xs">
                            زمان مطالعه: 20 دقیقه
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) =>  { 
 const {data}= await axios.get("http://localhost:5000/api/posts")
  return {
    props: {
      blogsData:data,
    }, // will be passed to the page component as props
  }
}