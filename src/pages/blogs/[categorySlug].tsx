import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import axios from "axios";
import PostList from "@/component/posts/PostList";
import SortBar from "@/component/posts/SortBar";
import CategoryMobile from "@/component/posts/CategoryMobile";
import CategoryDesktop from "@/component/posts/CategoryDesktop";

const CategoryBlog: NextPage = ({
  blogsData,
  postCategoreis,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="bg-gray-50 min-h-screen py-4 px-3">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,1fr)] ">
          <div className=" hidden md:block md:row-span-2 md:col-span-3">
            <CategoryDesktop postCategoreis={postCategoreis} />
          </div>
          {/* category mobile */}
          <CategoryMobile postCategoreis={postCategoreis} />
          <div className=" hidden md:block md:col-span-9">
            <SortBar />
          </div>
          <div className=" md:col-span-9 grid grid-cols-6 gap-8">
            <PostList blogsData={blogsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBlog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?page=1&limit=10&categorySlug=${params?.categorySlug}`
  );
  const { data: postCategoreis } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  const { data } = result;
  return {
    props: {
      blogsData: data,
      postCategoreis: postCategoreis.data,
    }, // will be passed to the page component as props
  };
};
