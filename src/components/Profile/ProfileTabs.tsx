import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileTextIcon, HeartIcon } from "lucide-react";
import { PostCard } from "@/components/Home/PostCard";

export default function ProfileTabs({
  posts,
  likedPosts,
  userId,
}: ProfileTabsProps) {
  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="w-full justify-start border-b bg-transparent">
        <TabsTrigger
          value="posts"
          className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-muted-foreground 
            transition-all duration-200 border-b-2 border-transparent 
            data-[state=active]:border-primary data-[state=active]:text-primary 
            hover:text-foreground hover:border-primary/50"
        >
          <FileTextIcon className="size-4" />
          Posts
        </TabsTrigger>

        <TabsTrigger
          value="likes"
          className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-muted-foreground 
            transition-all duration-200 border-b-2 border-transparent 
            data-[state=active]:border-primary data-[state=active]:text-primary 
            hover:text-foreground hover:border-primary/50"
        >
          <HeartIcon className="size-4" />
          Likes
        </TabsTrigger>
      </TabsList>

      <TabsContent value="posts" className="mt-6">
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post.id} post={post} dbUserId={userId} />
            ))
          ) : (
            <div className="text-center py-10 text-muted-foreground bg-muted/30 rounded-xl border">
              No posts yet
            </div>
          )}
        </div>
      </TabsContent>

      <TabsContent value="likes" className="mt-6">
        <div className="space-y-6">
          {likedPosts.length > 0 ? (
            likedPosts.map((post) => (
              <PostCard key={post.id} post={post} dbUserId={userId} />
            ))
          ) : (
            <div className="text-center py-10 text-muted-foreground bg-muted/30 rounded-xl border">
              No liked posts to show
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
