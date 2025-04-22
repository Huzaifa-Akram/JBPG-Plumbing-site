"use client";
// src/app/blog/components/BlogCard.tsx
import React from "react";
import { BlogPost } from "../data/blogData";
import Image from "next/image";
import styles from "./BlogCard.module.css";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the blog page with the slug as a URL parameter
    router.push(`/blog?slug=${post.slug}`);
  };

  return (
    <div className={styles.blogCard}>
      <div className={styles.imageContainer}>
        <Image
          src={post.imageUrl}
          alt={post.title}
          className={styles.image}
          width={400}
          height={225}
          priority={false}
          quality={80}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>{post.date}</span>
          <span className={styles.dot}>•</span>
          <span>{post.author}</span>
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.summary}>{post.summary}</p>
        <div className={styles.tags}>
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <button onClick={handleClick} className={styles.readMore}>
          Read More
          <svg
            className={styles.arrow}
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
