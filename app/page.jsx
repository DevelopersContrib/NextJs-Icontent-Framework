import { getDomain, getData } from '@/lib/data';
import { getBlogs } from '@/lib/blog';

import BlogPosts from '@/components/BlogPostsComponent';
import Pagination from '@/components/Pagination';
import SearchComponent from '@/components/home/SearchComponent';
import Loading from '@/components/includes/Loading';

const Home = async () => {
  const domain = getDomain();
  const blogs = await getBlogs(domain);

  return (
    <>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        {/* Start:: Search */}
        <div className="mb-10 ">
          <SearchComponent />
        </div>
        <div className="mb-10 text-center flex flex-col justify-center items-center">
          <Loading />
        </div>
        {/* Start:: 3 Columns */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          <BlogPosts blogs={blogs} />
        </div>
        <div className="mt-10 mx-auto max-w-7xl py-8">
          <Pagination totalPage={8} />
        </div>
      </div>
    </>
  );
};

export default Home;
