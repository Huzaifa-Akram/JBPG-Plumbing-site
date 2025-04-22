"use client";
// src/app/blog/page.tsx
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { blogPosts, BlogPost } from "../../data/blogData";
import BlogList from "../../components/BlogList";
import BlogDetail from "../../components/BlogDetail";
import styles from "./BlogPage.module.css";

// Create a client component that uses useSearchParams
const BlogContent = () => {
  const searchParams = useSearchParams();
  const slug = searchParams?.get("slug") || null;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const post = blogPosts.find((post) => post.slug === slug);
      setSelectedPost(post || null);
    } else {
      setSelectedPost(null);
    }
  }, [slug]);

  const handleBack = () => {
    // Clear the slug from the URL
    const url = new URL(window.location.href);
    url.searchParams.delete("slug");
    window.history.pushState({}, "", url);
    setSelectedPost(null);
  };

  return (
    <>
      {!selectedPost ? (
        <>
          <h1 className={styles.pageTitle}>Our Blog</h1>
          <div className={styles.introCard}>
            <h2 className={styles.introTitle}>
              Welcome to Our Plumbing Knowledge Hub!
            </h2>
            <p className={styles.introText}>
              Discover expert tips, comprehensive guides, and solutions for all
              your plumbing needs. Whether you&apos;re a homeowner or a
              professional, our blog provides valuable insights to help you
              tackle any plumbing challenge.
            </p>
          </div>

          <BlogList />
        </>
      ) : (
        <BlogDetail post={selectedPost} onBack={handleBack} />
      )}
    </>
  );
};

// Main component with Suspense boundary
const BlogPage = () => {
  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <BlogContent />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogPage;
