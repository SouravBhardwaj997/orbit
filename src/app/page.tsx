import { getPosts } from "@/actions/post.action";
import { getUserId } from "@/actions/user.action";
import { CreatePost } from "@/components/Home/CreatePost";
import { PostCard } from "@/components/Home/PostCard";
import { RecommendedFollows } from "@/components/Home/RecommendedFollows";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const authUser = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getUserId();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {authUser ? <CreatePost /> : null}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <RecommendedFollows />
      </div>
    </div>
  );
}
