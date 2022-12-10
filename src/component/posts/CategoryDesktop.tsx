import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react'
type propTypes={
    postCategoreis?:any
}
const CategoryDesktop = ({postCategoreis}:propTypes) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
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
                {postCategoreis.map((category: any, index: string) => {
                  return (
                    <Link
                      href={`/blogs/${category.englishTitle}`}
                      key={category._id}
                    >
                      <a className="pr-4 block py-1 mb-1"> {category.title}</a>
                    </Link>
                  );
                })}
              </div>
            </div>
    </>
  )
}

export default CategoryDesktop