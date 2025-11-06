import { CalendarIcon, LinkIcon, MapPinIcon } from "lucide-react";

export default function ProfileDetails({
  user,
  formattedDate,
}: ProfileDetailsProps) {
  return (
    <div className="w-full mt-6 space-y-2 text-sm">
      {user.location && (
        <div className="flex items-center text-muted-foreground">
          <MapPinIcon className="size-4 mr-2" />
          {user.location}
        </div>
      )}
      {user.website && (
        <div className="flex items-center text-muted-foreground">
          <LinkIcon className="size-4 mr-2" />
          <a
            href={
              user.website.startsWith("http")
                ? user.website
                : `https://${user.website}`
            }
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </div>
      )}
      <div className="flex items-center text-muted-foreground">
        <CalendarIcon className="size-4 mr-2" />
        Joined {formattedDate}
      </div>
    </div>
  );
}
