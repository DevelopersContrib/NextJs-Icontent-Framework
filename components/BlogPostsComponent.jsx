'use client';
import Image from 'next/image';

import { useEffect, useState } from 'react';

import Loading from './Loading';
import NoResultsFound from './NoResultsFoundComponent';
import Pagination from '@/components/Pagination';
import SearchComponent from '@/components/SearchComponent';
import { formatDate } from '@/lib/dateTimeHelper';

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotaPages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const limit = 9;

  const getBlogs = async () => {
    setBlogs([]);
    setIsLoading(true);
    const res = await fetch(`/api/icontent/get-blogs?page=${encodeURIComponent(page)}&limit=${encodeURIComponent(limit)}&search=${encodeURIComponent(searchKey)}`, {
      method: 'GET',
    });

    const result = await res.json();

    setBlogs(result);
    setIsLoading(false);
  };

  const getTotalBlogs = async () => {
    const res = await fetch(`/api/icontent/get-count-blogs?search=${encodeURIComponent(searchKey)}`, {
      method: 'GET',
    });

    const result = await res.json();

    setTotaPages(Math.ceil(result[0].totalNumBlogs / limit));
  };

  const handleChangePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getBlogs();
    getTotalBlogs();
  }, [page, searchKey]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="mb-10 ">
            <SearchComponent setSearchKey={setSearchKey} />
          </div>
          {blogs.length === 0 && !isLoading ? <NoResultsFound /> : ''}
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {blogs &&
              blogs.map((blog, index) => (
                <div className="group cursor-pointer" key={index}>
                  <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 ">
                    <a href={`/blog/${blog.slug}`} className="relative block aspect-video">
                      <Image priority width={0} height={0} sizes="100vw" className="object-cover transition-all max-w-full h-[180px] w-full" alt={blog.blog_title} src={blog.blog_image ? blog.blog_image : '/default-no-image.png'} />
                    </a>
                  </div>
                  <div>
                    <div>
                      {/* add to class flex and remove hidden*/}
                      <div className=" gap-3 hidden">
                        <a href={`/blog/${blog.slug}`}>
                          <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">{blog.blog_title}</span>
                        </a>
                      </div>
                      <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 ">
                        <a href={`/blog/${blog.slug}`}>
                          <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] ">
                            {blog.blog_title}
                          </span>
                        </a>
                      </h2>
                      <div className="mt-3 flex items-center space-x-3 text-gray-500 ">
                        {/* <a href={`/blog/${createSlug(blog.blog_title)}`}>
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
                    <span className="text-xs text-gray-300 ">
                      •
                    </span> */}
                        <time className="truncate text-sm">{formatDate(blog.date_created)}</time>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-10 mx-auto max-w-7xl py-8">{totalPages > 1 && <Pagination totalPages={totalPages} page={page} handleChangePage={handleChangePage} />}</div>
        </>
      )}
    </>
  );
};

export default BlogPosts;
