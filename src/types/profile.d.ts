interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editForm: {
    name: string;
    bio: string;
    location: string;
    website: string;
  };
  setEditForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      bio: string;
      location: string;
      website: string;
    }>
  >;
  onSubmit: () => void;
}

type User = Awaited<
  ReturnType<typeof import("@/actions/profile.action").getProfileByUsername>
>;
type Posts = Awaited<
  ReturnType<typeof import("@/actions/profile.action").getUserPosts>
>;

interface ProfilePageClientProps {
  user: NonNullable<User>;
  posts: Posts;
  likedPosts: Posts;
  isFollowing: boolean;
}

interface ProfileTabsProps {
  posts: Posts;
  likedPosts: Posts;
  userId: string | null;
}

interface ProfileDetailsProps {
  user: NonNullable<User>;
  formattedDate: string;
}

interface ProfileActionsProps {
  currentUser?: UserResource | null | undefined;
  isOwnProfile: boolean;
  isFollowing: boolean;
  isUpdatingFollow: boolean;
  onFollow: () => void;
  onEdit: () => void;
}

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}
