"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { format } from "date-fns";
import { toast } from "sonner";
import { updateProfile } from "@/actions/profile.action";
import { toggleFollow } from "@/actions/user.action";
import ProfileHeader from "./ProfileHeader";
import ProfileActions from "./ProfileActions";
import ProfileDetails from "./ProfileDetails";
import ProfileTabs from "./ProfileTabs";
import EditProfileDialog from "./EditProfileDialog";

export default function ProfilePageClient({
  user,
  posts,
  likedPosts,
  isFollowing: initialIsFollowing,
}: ProfilePageClientProps) {
  const { user: currentUser } = useUser();
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isUpdatingFollow, setIsUpdatingFollow] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
    location: user?.location || "",
    website: user?.website || "",
  });

  const handleEditSubmit = async () => {
    const formData = new FormData();
    Object.entries(editForm).forEach(([key, value]) =>
      formData.append(key, value)
    );

    const result = await updateProfile(formData);
    if (result.success) {
      setShowEditDialog(false);
      toast.success("Profile updated successfully");
    }
  };

  const handleFollow = async () => {
    if (!currentUser) return;
    try {
      setIsUpdatingFollow(true);
      await toggleFollow(user.id);
      setIsFollowing(!isFollowing);
    } catch {
      toast.error("Failed to update follow status");
    } finally {
      setIsUpdatingFollow(false);
    }
  };

  const isOwnProfile =
    currentUser?.username === user?.username ||
    currentUser?.emailAddresses[0].emailAddress.split("@")[0] ===
      user?.username;

  const formattedDate = format(new Date(user.createdAt), "MMMM yyyy");

  return (
    <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
      <ProfileHeader user={user} />

      <ProfileActions
        currentUser={currentUser}
        isOwnProfile={isOwnProfile}
        isFollowing={isFollowing}
        isUpdatingFollow={isUpdatingFollow}
        onFollow={handleFollow}
        onEdit={() => setShowEditDialog(true)}
      />

      <ProfileDetails user={user} formattedDate={formattedDate} />

      <ProfileTabs
        posts={posts}
        likedPosts={likedPosts}
        userId={currentUser ? currentUser.id : null}
      />

      <EditProfileDialog
        open={showEditDialog}
        onOpenChange={setShowEditDialog}
        editForm={editForm}
        setEditForm={setEditForm}
        onSubmit={handleEditSubmit}
      />
    </div>
  );
}
