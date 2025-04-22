"use client";
import React, { useState } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "./BlogCard";
import styles from "./BlogList.module.css";

const BlogList = () => {
  const [filter, setFilter] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Get unique tags from all blog posts
  const uniqueTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on search and tag filter
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      filter === "" ||
      post.title.toLowerCase().includes(filter.toLowerCase()) ||
      post.summary.toLowerCase().includes(filter.toLowerCase());

    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Plumbing Tips & Advice</h2>
        <div className={styles.filterContainer}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search articles..."
              className={styles.searchInput}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <svg
              className={styles.searchIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className={styles.selectContainer}>
            <select
              className={styles.topicSelect}
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All Topics</option>
              {uniqueTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className={styles.emptyState}>
          <h3 className={styles.emptyTitle}>No blog posts found</h3>
          <p className={styles.emptyMessage}>
            Try adjusting your search or filter
          </p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
