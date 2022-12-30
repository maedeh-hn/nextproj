import { BookmarkIcon, ChatBubbleBottomCenterIcon, HeartIcon } from "@heroicons/react/24/outline"
import {HeartIcon as SolidHeartIcon,BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid"
import { log } from "console"
type proptypes={
post:any,
isSmall?:boolean
}
const PostInraction= ({ post,isSmall }: proptypes): JSX.Element =>{
    console.log(post);
    
return(
    <div className="flex items-center">
    <button className='bg-red-100 p-0.5 ronded flex items-center gap-x-1'>
        {post.isLiked?<SolidHeartIcon className="w-4 h-4 fill-red-500"/>:<HeartIcon className="w-4 h-4 stroke-red-500" />}
    
    <span className='block text-xs font-bold leading-3 text-red-500'>
      {post.likesCount}
    </span>
    </button>

    <button className='bg-gray-100 p-0.5 ronded flex items-center gap-x-1'>
    <ChatBubbleBottomCenterIcon className="w-4 h-4 stroke-gray-500" />
    <span className='block text-xs font-bold leading-3 text-gray-500'>
      {post.commentsCount}
    </span>
    </button>
    <button className='bg-blue-100 p-0.5 ronded flex items-center gap-x-1'>
        {post.isBookmarked?<SolidBookmarkIcon className="w-4 h-4 fill-current"/>:<BookmarkIcon className="w-4 h-4 stroke-blu-500" />}


    </button>
   
  </div>
)
}
export default PostInraction