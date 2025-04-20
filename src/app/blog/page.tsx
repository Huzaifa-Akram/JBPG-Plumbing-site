import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | JBPHS Plumbing & Heating Services",
  description:
    "Latest news, tips, and updates from the plumbing and heating experts.",
};

const BlogPage = () => {
  return (
    <div className="pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Our Blog
        </h1>
        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Coming Soon!
          </h2>
          <p className="text-gray-600">
            We&apos;re working on some great content for our blog. Check back
            soon for plumbing tips, heating advice, and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
