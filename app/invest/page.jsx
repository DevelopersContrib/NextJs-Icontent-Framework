import Script from 'next/script';
import { getDomain} from "@/lib/data";

// set dynamic metadata
export async function generateMetadata(){
  
  const domain = getDomain();
   
  return {
    title: 'Invest - '+domain
  };
}

const Page = () => {
  const domain = getDomain();
  return (
    <>
      <Script src={'https://tools.contrib.com/pages/investment?d=' + domain + '&container=investment-script'} />
      <div className="investment-script"></div>
    </>
  );
};

export default Page;
