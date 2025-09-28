import { getPosts } from "@/actions/post.action";
import React from "react";

type Posts = Awaited<ReturnType<typeof getPosts>>;

type Post = Posts[number];

export const PostCard = ({
  post,
  dbUserId,
}: {
  post: Post;
  dbUserId: string | null;
}) => {
  console.log("post", post);
  return <div>Hello</div>;
};
