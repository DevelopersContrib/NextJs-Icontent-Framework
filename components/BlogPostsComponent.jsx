"use client";
import Image from "next/image";

import { useEffect } from "react";

const BlogPosts = ({ blogs }) => {
  useEffect(() => {
    console.log(blogs);
  }, [blogs]);
  return (
    <>
      {blogs.data &&
        blogs.data.map((blog, index) => (
          <div className="group cursor-pointer" key={index}>
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a
                href={`/blog/${blog.id}`}
                className="relative block aspect-video"
              >
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src={blog.blog_image}
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                      {blog.blog_title}
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                      {blog.blog_content.substring(0, 100)}
                    </span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">
                      Reinvention often comes in spurts, after a long period of
                      silence. Just as modern architecture recently enjoyed a
                      comeback, brand architecture, a field with
                      well-established principles for decades
                    </a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">
                    •
                  </span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default BlogPosts;