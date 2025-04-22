"use client";
import React from "react";
import { BlogPost } from "../data/blogData";
import Image from "next/image";
import styles from "./BlogPostDetail.module.css";

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogDetail = ({ post, onBack }: BlogDetailProps) => {
  return (
    <article className={styles.blogPost}>
      <div className={styles.container}>
        <button onClick={onBack} className={styles.backLink}>
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back to all articles
        </button>

        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <div className={styles.authorDate}>
              <span className={styles.author}>By {post.author}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.date}>{post.date}</span>
            </div>

            <div className={styles.tags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className={styles.imageContainer}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            className={styles.image}
            width={900}
            height={506}
            priority
            quality={85}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.summary}>{post.summary}</p>

          <div className={styles.body}>
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.relatedContainer}>
          <h3 className={styles.relatedTitle}>Related Plumbing Topics</h3>
          <ul className={styles.relatedTags}>
            {post.tags.map((tag, index) => (
              <li key={index}>
                <button className={styles.relatedTag}>{tag}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
