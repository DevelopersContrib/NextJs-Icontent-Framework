import Script from 'next/script';
import { getDomain} from "@/lib/data";

// set dynamic metadata
export async function generateMetadata(){
  
  const domain = getDomain();
   
  return {
    title: 'Developer - '+domain
   
  };
}

const Page = () => {
  const domain = getDomain();
  return (
    <>
      <Script src={'https://tools.contrib.com/pages/developer?d=' + domain + '&container=developer-script'} />
      <div className="developer-script"></div>
    </>
  );
};

export default Page;
