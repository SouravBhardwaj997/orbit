import { Button } from "@/components/ui/Button";
import { EditIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

export default function ProfileActions({
  currentUser,
  isOwnProfile,
  isFollowing,
  isUpdatingFollow,
  onFollow,
  onEdit,
}: ProfileActionsProps) {
  if (!currentUser) {
    return (
      <SignInButton mode="modal">
        <Button className="w-full mt-4">Follow</Button>
      </SignInButton>
    );
  }

  if (isOwnProfile) {
    return (
      <Button className="w-full mt-4" onClick={onEdit}>
        <EditIcon className="size-4 mr-2" />
        Edit Profile
      </Button>
    );
  }

  return (
    <Button
      className="w-full mt-4"
      onClick={onFollow}
      disabled={isUpdatingFollow}
      variant={isFollowing ? "outline" : "default"}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}
