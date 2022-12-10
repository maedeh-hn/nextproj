import Link from 'next/link';
import React from 'react'

type propTypes={
    postCategoreis:any
}

const CategoryMobile = ({postCategoreis}:propTypes) => {
  return (
    <>
              <div className="flex md:hidden gap-x-4 overflow-auto py-3">
          {postCategoreis.map((category: any, index: string) => {
                  return (
                    <Link
                      href={`/blogs/${category.englishTitle}`}
                      key={category._id}
                    >
                      <a className=" block border-[1px] border-gray-400 text-gray-400 bg-white rounded-3xl px-3 py-1 whitespace-nowrap"> {category.title}</a>
                    </Link>
                  );
                })}
          </div></>
  )
}

export default CategoryMobile