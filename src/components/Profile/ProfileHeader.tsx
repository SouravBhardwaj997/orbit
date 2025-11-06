import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ProfileHeader({ user }: { user: User }) {
  if (!user) {
    return <></>;
  }
  return (
    <Card className="bg-card">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.image ?? "/avatar.png"} />
          </Avatar>
          <h1 className="mt-4 text-2xl font-bold">
            {user.name ?? user.username}
          </h1>
          <p className="text-muted-foreground">@{user.username}</p>
          <p className="mt-2 text-sm">{user.bio}</p>

          <div className="w-full mt-6">
            <div className="flex justify-between mb-4">
              <div>
                <div className="font-semibold">{user._count.following}</div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>
              <Separator orientation="vertical" />
              <div>
                <div className="font-semibold">{user._count.followers}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <Separator orientation="vertical" />
              <div>
                <div className="font-semibold">{user._count.posts}</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
