"use client";
import Image from "next/image";

import { useEffect } from "react";

import { formatDate } from "@/lib/dateTimeHelper";

const Blog = ({ content }) => {
  useEffect(() => {}, [content]);
  return (
    <>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <div className="mx-auto max-w-screen-md ">
          {/* <div className="flex justify-center">
            <div className="flex gap-3">
              <a href="#">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                  Technology
                </span>
              </a>
            </div>
          </div> */}
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {content[0].blog_title}
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              {/* <div className="relative h-10 w-10 flex-shrink-0">
                <a href="#">
                  <Image
                    priority
                    sizes="40px"
                    className="rounded-full object-cover"
                    alt=""
                    width={0}
                    height={0}
                    src="/user.jpg"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </a>
              </div> */}
              <div>
                {/* <p className="text-gray-800 dark:text-gray-400">
                  <a href="#">Mario Sanchez</a>
                </p> */}
                <div className="flex items-center space-x-2 text-sm">
                  <time className="text-gray-500 dark:text-gray-400">
                    {formatDate(content[0].date_created)}
                  </time>
                  {/* <span>· 8 min read</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          priority
          sizes="100vw"
          className="object-cover"
          width={0}
          height={0}
          alt=""
          src={
            content[0].blog_image
              ? content[0].blog_image
              : "/default-no-image.png"
          }
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
      </div>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className="mx-auto max-w-screen-md ">
          <div className="mx-auto my-3">{content[0].blog_content}</div>
          {/* <div className="mb-7 mt-7 flex justify-center">
            <a
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 "
              href="#"
            >
              &#x2190; View all posts
            </a>
          </div> */}
          {/* <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500">
            <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
              <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
                <a href="#">
                  <Image
                    priority
                    src="/user.jpg"
                    width="0"
                    height="0"
                    className="rounded-full object-cover"
                    sizes="96px"
                    alt=""
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </a>
              </div>
              <div>
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-gray-800 ">
                    About Mario Sanchez
                  </h3>
                </div>
                <div>
                  <p>
                    Mario is a Staff Engineer specialising in Frontend at{" "}
                    <a href="#" rel="noopener" target="_blank">
                      Vercel
                    </a>
                    , as well as being a co-founder of Acme and the content
                    management system Sanity. Prior to this, he was a Senior
                    Engineer at Apple.{" "}
                  </p>
                </div>
                <div className="mt-3">
                  <a
                    className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 "
                    href="#"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
