import Blog from '@/components/BlogPostComponent';

const Page = async ({ params }) => {
  return (
    <>
      <Blog slug={params.slug} />
    </>
  );
};

export default Page;
