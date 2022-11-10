import type { NextPage } from "next";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,1fr)] min-h-screen">
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
            {["next.png", "nodejs.webp", "nuxt.png", "vuejs.png", "nuxt.png", "vuejs.png"].map((item:any,index: any) => {
              return (
                <div
                  key={index}
                  className="col-span-6 md:col-span-3 lg:col-span-2 bg-[red] rounded-3xl p-2 max-w-[600px] w-full  relative"
                >
                  <div className="max-w-[600px] w-full rounded-3xl">
                    <img      src={`/images/${item}`} className="w-full h-[150px] object-cover rounded-3xl"/>

                  </div>
                  <div className="bg-gray-50 rounded-2xl">content</div>
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
