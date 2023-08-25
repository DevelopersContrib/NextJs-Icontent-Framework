import Blog from '@/components/BlogPostComponent';
import Navigation from '@/components/includes/Navigation';
import Footer from '@/components/includes/Footer';
import { getData } from '@/lib/data';

const Page = async ({ params }) => {
  const c = await getData();
  const socials = {
    fb: c.data.fb,
    linkedin: c.data.linkedin,
    twiiter: c.data.twitter
  }
  return (
    <>
      <Navigation domain={c.data.domainName} logo={c.data.logo} />
      <Blog slug={params.slug} />
      <Footer domain={c.data.domainName} socials={socials} />
    </>
  );
};

export default Page;
