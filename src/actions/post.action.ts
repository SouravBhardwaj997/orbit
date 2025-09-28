"use server";

import prisma from "@/lib/prisma";
import { getUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost(content: string, image: string) {
  try {
    const authorId = await getUserId();
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
    return { success: false, message: "Failed to create post" };
  }
}

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
            username: true,
          },
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
                image: true,
                name: true,
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            likes: true,
            comments: true,
          },
        },
      },
    });

    return posts;
  } catch (error) {
    console.log("Error in getPosts", error);
    throw new Error("Failed to fetch posts");
  }
}
