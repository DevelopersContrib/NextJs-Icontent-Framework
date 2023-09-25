import Script from 'next/script';
import { getDomain } from '@/lib/data';

// set dynamic metadata
export async function generateMetadata(){
  
  const domain = getDomain();
   
  return {
    title: 'Terms of Use - '+domain
   
  };
}
const Page = () => {
  const domain = getDomain();
  return (
    <>
      <Script src={'https://tools.contrib.com/pages/terms?d=' + domain + '&container=staffing-script'} />
      <div className="staffing-script"></div>
    </>
  );
};

export default Page;
