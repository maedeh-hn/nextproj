import PostInraction from "@/component/posts/PostIntraction";
import { toPersionDigits } from "@/utils/toPersionDigits";
import {
  BookmarkIcon,
  BookmarkSquareIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React, { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import {CopyToClipboard} from 'react-copy-to-clipboard'
const PostPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ post }) => {

const [copied,setCopied]=useState<boolean>(false)

  return (
    <div className=" bg-gray-50 min-h-screen py-[2rem] px-[2rem] ">
      <div className="md:max-w-screen-lg container mx-auto ">
        <header
          className="flex  
      gap-y-5 justify-between items-start mb-12
       mx-auto"
        >
          <div className="flex items-stretch ">
            <img
              className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2
           ring-white"
            />
            <div className="flex flex-col mr-4 justify-between">
              <span className="text-gray-500">{post.author.biography}</span>
              <span className="text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span className="text-gray-500">
                {" "}
                زمان مطالعه: {toPersionDigits(post.readingTime)} دقیقه
              </span>
            </div>
          </div>
          <div className="flex">
            <button>
              <LinkIcon className="h-6 w-6 hover:text-black text-gray-500" />
            </button>
            <button
              className="mr-4 border border-gray-300 text-gray-500 rounded-full 
          px-3 py-1 flex items-center"
            >
              <span className="ml-1 text-xs">
                {post?.isBookmarked ? "ذخیره" : "ذخیره شده"}
              </span>
              {post?.isBookmarked ? (
                <BookmarkIcon className="h-6 w-6 fill-current" />
              ) : (
                <BookmarkIcon className="h-6 w-6 stroke-current" />
              )}
            </button>
          </div>
        </header>
        <main
          className="prose prose-xl prose-slate prose-h1:text-3xl prose-h1:font-[700]
         prose-h2:text-2xl prose-img:w-full prose-a:text-blue-500"
        >
          <h1>{post.title}</h1>
          <h2>عنوان اول تستی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <img src={post.coverImage} />
          <h2>عنوان دوم تستی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <a>لینک منبع مقاله</a>
        </main>
        <section>
          <ul className="flex items-center flex-wrap gap-x-4">
            {["javsScript", "React", "NextJs", "فرانت اند"].map(
              (tag: any, index) => {
                return (
                  <li
                    key={index}
                    className="py-1 px-3 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all text-gray-600 text-sm my-3 block"
                  >
                    {tag}
                  </li>
                );
              }
            )}
          </ul>
        </section>
        <div>
          <PostInraction post={post} />
        </div>
        <div className="flex gap-3 mt-4">
          <a
            className="block"
            target="_blank"
            rel="noreferrer"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.DOMAIN_URL}/posts/${post?.hashId}/${post?.postSlug}`}
          >
            <IoLogoLinkedin size={20} />
          </a>
          <a className="block" target="_blank" href="">
            <IoLogoTwitter size={20} />
          </a>
          <a className="block" target="_blank" href="">
            <FaTelegram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${params?.postSlug}`);

  return {
    props: {
      post: data,
    },
  };
}
