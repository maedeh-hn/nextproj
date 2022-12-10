import { AdjustmentsVerticalIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SortBar = () => {
  return (
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
  )
}

export default SortBar