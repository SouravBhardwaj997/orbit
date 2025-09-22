import { CreatePost } from "@/components/Home/CreatePost";
import { RecommendedFollows } from "@/components/Home/RecommendedFollows";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const authUser = await currentUser();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">{authUser ? <CreatePost /> : null}</div>
      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <RecommendedFollows />
      </div>
    </div>
  );
}
