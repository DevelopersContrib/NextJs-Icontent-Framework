import { getDomain, getData } from '@/lib/data';
import { getBlogs } from '@/lib/blog';

import BlogPosts from '@/components/BlogPostsComponent';
// import Pagination from '@/components/Pagination';
// import SearchComponent from '@/components/SearchComponent';
// import Loading from '@/components/includes/Loading';

import Navigation from '@/components/includes/Navigation';
import Footer from '@/components/includes/Footer';
import { CTABannerSection } from '@/components/CTABanner';

const Home = async () => {
  const c = await getData();
  const domain = getDomain();
  const socials = {
    fb: c.data.fb,
    linkedin: c.data.linkedin,
    twiiter: c.data.twitter
  }
  // const blogs = await getBlogs(domain);

  return (
    <>
      <Navigation domain={c.data.domainName} logo={c.data.logo} />

      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        {/* Start:: 3 Columns */}
        <BlogPosts />
      </div>
      <CTABannerSection />
      <Footer domain={c.data.domainName} socials={socials} />
    </>
  );
};

export default Home;
