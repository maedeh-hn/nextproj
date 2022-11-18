import { BookmarkIcon, ChatBubbleBottomCenterIcon, HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

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
                    <img
                      src={item.coverImage}
                      className="w-full h-[150px] object-cover rounded-3xl"
                    />
                  </div>
                  <div className="bg-gray-50 p-2 rounded-2xl mt-5 flex flex-col justify-between flex-1">
                    <h2 className="mb-4 font-bold">
                     {item.title}
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
                          {item.category?.englishTitle}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center">
                          <button className='bg-red-100 p-0.5 ronded flex items-center gap-x-1'>
                          <HeartIcon className="w-4 h-4 stroke-red-500" />
                          <span className='block text-xs font-bold leading-3 text-red-500'>
                            {item.likesCount}
                          </span>
                          </button>

                          <button className='bg-gray-100 p-0.5 ronded flex items-center gap-x-1'>
                          <ChatBubbleBottomCenterIcon className="w-4 h-4 stroke-gray-500" />
                          <span className='block text-xs font-bold leading-3 text-gray-500'>
                            {item.commentsCount}
                          </span>
                          </button>
                          <button className='bg-blue-100 p-0.5 ronded flex items-center gap-x-1'>
                          <BookmarkIcon className="w-4 h-4 stroke-blu-500" />

                          </button>
                         
                        </div>
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