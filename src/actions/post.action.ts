"use server";

import prisma from "@/lib/prisma";
import { getUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, image: string) {
  try {
    const authorId = await getUserId();
    console.log("authorId", authorId);
    if (!authorId) return;
    const post = await prisma.post.create({
      data: {
        content,
        authorId,
        image,
      },
    });
    revalidatePath("/");
    return { success: true, message: "Post Created Successfully", post };
  } catch (error) {
    console.log("Error in createPost", error);
    return { success: true, message: "Failed to create post" };
  }
}

export async function fetchPosts() {
  try {
  } catch (error) {}
}
