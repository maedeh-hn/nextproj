import { BookmarkIcon, ChatBubbleBottomCenterIcon, HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import PostInraction from './PostIntraction'

type propTypes={
    blogsData:any
}
const PostList = ({blogsData}:propTypes) => {
  return (
    <>
             {blogsData.docs.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 max-w-[600px] w-full flex flex-col  relative"
                >
                  <div className="max-w-[600px] w-full rounded-3xl">
                    <Link href={`/posts/${item.hashId}/${item.slug}`}>
                      <a>
                    <img
                      src={item.coverImage}
                      className="w-full h-[150px] object-cover rounded-3xl"
                    />
                      </a>
                    </Link>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-2xl mt-5 flex flex-col justify-between flex-1">
                  <Link href={`/posts/${item.hashId}/${item.slug}`}>
                      <a>

                    <h2 className="mb-4 font-bold">
                     {item.title}
                    </h2>
                      </a>
                    </Link>
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
                        <Link href={`/blogs/${item.category?.englishTitle}`}>
                        <a>
                          
                        <span className="text-xs px-2 py-1 rounded-xl bg-blue-300 text-blue-600 cursor-pointer">
                          {item.category?.englishTitle}
                        </span>
                        </a>
                        </Link>
                      </div>
                      <div className="flex items-center justify-between mt-5">
                          <PostInraction post={item}/>
                        <div>
                          <span className="text-gray-500 text-xs">
                            زمان مطالعه: {item.readingTime} دقیقه
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
    </>
  )
}

export default PostList