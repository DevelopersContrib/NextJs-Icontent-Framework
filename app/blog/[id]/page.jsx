import { getBlog } from "@/lib/blog";
import { getDomain } from "@/lib/data";
import Blog from "@/components/BlogPostComponent";

const Page = async ({ params }) => {
  const domain = getDomain();
  const id = params.id;
  const blogContent = await getBlog(domain, id);
  return (
    <>
      <Blog content={blogContent} />
    </>
  );
};

export default Page;
