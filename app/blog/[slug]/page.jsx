import { getBlog } from '@/lib/blog';
import { getData } from '@/lib/data';

import Blog from '@/components/BlogPostComponent';

const Page = async ({ params }) => {
  const c = await getData();
  const slug = params.slug;
  const blogContent = await getBlog(c.data.domainName, slug);
  return (
    <>
      <Blog content={blogContent} />
    </>
  );
};

export default Page;
