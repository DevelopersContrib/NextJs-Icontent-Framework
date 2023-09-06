import { Metadata, ResolvingMetadata } from 'next';
import Blog from '@/components/BlogPostComponent';
import Navigation from '@/components/includes/Navigation';
import Footer from '@/components/includes/Footer';
import { getData } from '@/lib/data';


// set dynamic metadata
export async function generateMetadata({ params }){
  // read route params
  const slug = params.slug;
  const c = await getData();
  const url = 'https://api1.contrib.co/v2/icontent/GetContentBySlug?key=5c1bde69a9e783c7edc2e603d8b25023&domain='+c.data.domainName+'.com&slug=' + slug;

  // fetch data
  const data = await fetch(url).then((res) => res.json());
 
  return {
    title: data.data[0].blog_title,
    description: data.data[0].blog_title,
  };
}

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
