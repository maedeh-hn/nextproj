import axios from "axios";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";

const postPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>>= ({
  post,
}) => {
  return <div>postSlug</div>;
};

export default postPage;

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
