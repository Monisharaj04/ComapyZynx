import React from "react";
import { assets } from "../assets/assets";

const BlogPosts = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: assets.Ux_img, // Blog post image
      profileImage: assets.user1_img, // Profile image
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: assets.Migrating_img, // Blog post image
      profileImage: assets.user2_img, // Profile image
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: assets.Building_img, // Blog post image
      profileImage: assets.user3_img, // Profile image
    },
  ];

  return (
    <div className="bg-white py-12 px-6 lg:px-16">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
      <div>
        <h2 className="text-lg font-semibold text-red-500">Our blog</h2>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">
          Latest blog posts
        </h1>
        <p className="text-gray-600 mt-2">
          Tools and strategies modern teams need to help their companies grow.
        </p>
      </div>
      {/* Hide button on larger screens, display at bottom for small screens */}
      <button className="hidden lg:block px-6 py-2 bg-red-500 text-white text-sm font-medium rounded-full mt-4 lg:mt-0 hover:bg-red-600">
        View all posts
      </button>
    </div>

    {/* Blog posts grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {posts.map((post, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-red-500 font-semibold">
              {post.category}
            </p>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              {post.title} <span>↗</span>
            </h3>
            <p className="mt-2 text-sm text-gray-600">{post.description}</p>
            <div className="flex items-center mt-4">
              <img
                className="h-8 w-8 rounded-full"
                src={post.profileImage} // Use different profile image for each author
                alt={post.author}
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {post.author}
                </p>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Add button at the bottom for smaller screens */}
    <div className="mt-6 lg:hidden flex justify-center">
      <button className="px-6 py-2 bg-red-500 text-white text-sm w-full font-medium rounded-full hover:bg-red-600">
        View all posts
      </button>
    </div>
  </div>
</div>

  );
};

export default BlogPosts;
