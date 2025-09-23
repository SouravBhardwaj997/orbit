"use client";
import React, { useState } from "react";
import { Button } from "../ui";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { toggleFollow } from "@/actions/user.action";

export const FollowButton = ({ userId }: { userId: string }) => {
  const [disable, setDisable] = useState(false);
  const handleFollow = async () => {
    setDisable(true);
    try {
      await toggleFollow(userId);
      toast.success("Followed successfully");
    } catch (error) {
      console.log("error in handleFollow", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setDisable(false);
    }
  };
  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      disabled={disable}
      className="w-20"
      onClick={handleFollow}
    >
      {disable ? <Loader className="animate-spin size-4" /> : "Follow"}
    </Button>
  );
};
