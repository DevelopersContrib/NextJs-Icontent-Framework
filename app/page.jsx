import { getDomain, getData } from '@/lib/data';
import { getBlogs } from '@/lib/blog';

import BlogPosts from '@/components/BlogPostsComponent';

const Home = async () => {
  const domain = getDomain();
  // const blogs = await getBlogs(domain);

  return (
    <>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        {/* Start:: Search */}

        {/* <div className="mb-10 text-center flex flex-col justify-center items-center">
          <Loading />
        </div> */}
        {/* Start:: 3 Columns */}
        
        <BlogPosts />
      </div>
    </>
  );
};

export default Home;
