import Image from "next/image";

import { getDomain } from "@/lib/data";
import { getBlogs } from "@/lib/blog";

import BlogPosts from "@/components/BlogPostsComponent";

const Home = async () => {
  const domain = getDomain();
  const blogs = await getBlogs(domain);
  return (
    <>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        {/* Start:: 2 Columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          {/* Insert BlogPosts here to have 2 columns template */}
        </div>
        {/* Start:: 3 Columns */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          <BlogPosts blogs={blogs} />
        </div>
        <div className="mt-10 flex justify-center">
          <a
            className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            href="#"
          >
            <span>View all Posts</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
