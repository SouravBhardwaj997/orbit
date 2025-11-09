# 🌐 Orbit

A modern **social media web application** built with **Next.js**, enabling users to share posts, follow others, and engage through likes, comments, and notifications — all in a sleek, responsive UI.

---

## 🚀 Tech Stack

- **Frontend:** Next.js (TypeScript), ShadCN UI
- **Authentication:** Clerk
- **Database & ORM:** PostgreSQL + Prisma
- **File Uploads:** UploadThing
- **State & Logic:** Next.js Server Actions
- **Styling:** Tailwind CSS

---

## ✨ Features

### 👤 User & Profile

- Secure authentication via **Clerk**
- Profile management (bio, location, website, profile image)
- View other users’ profiles with follow/follower details
- Recommended users to follow (`fetchRandomUsers`)

### 📝 Posts & Interactions

- Create text or image posts (`createPost`)
- Like/unlike posts (`toggleLike`)
- Comment on posts (`createComment`)
- Delete your own posts (`deletePost`)
- Personalized feed showing posts from followed users

### 🤝 Social Features

- Follow/unfollow other users (`toggleFollow`)
- Suggested users section to explore new connections
- Real-time follower/following counts

### 🔔 Notifications

- Notification system for **likes**, **comments**, and **follows**
- Mark notifications as read (`markNotificationsAsRead`)
- Efficient relational data handled via **Prisma**

### 🖼️ Media Uploads

- Integrated **UploadThing** for smooth and secure image uploads
- Supports post images and profile pictures

### 💅 UI/UX

- Built with **ShadCN components** for a consistent, modern look
- Fully responsive design for desktop and mobile
- Smooth transitions and focus on accessibility

---

## 🧩 Database Schema Overview

The application includes the following key models:

- **User:** Handles user profile info and relations (posts, followers, notifications)
- **Post:** Stores user posts and engagement (likes, comments)
- **Comment:** Linked to both posts and authors
- **Like:** Tracks user likes on posts
- **Follows:** Defines follower-following relationships
- **Notification:** Manages real-time notifications for interactions

---

## 📚 Highlights

- Secure user management with Clerk
- Scalable relational schema using Prisma
- Media uploads via UploadThing
- Responsive and elegant design with ShadCN UI
- Built entirely with Next.js Server Actions for clean backend logic

---

## ⚙️ Project Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/orbit.git
   cd orbit
   npm i
   DATABASE_URL="your_postgres_database_url"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
   CLERK_SECRET_KEY="your_clerk_secret_key"
   UPLOADTHING_SECRET="your_uploadthing_secret"
   UPLOADTHING_APP_ID="your_uploadthing_app_id"
   npm run dev
   ```

---

Developed by **Sourav Bhardwaj** Built with ❤️ using Next.js, Prisma & Clerk.
