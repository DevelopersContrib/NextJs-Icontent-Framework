import Script from 'next/script';
import { getDomain } from '@/lib/data';
const Page = () => {
  const domain = getDomain();
  return (
    <>
      <Script src={'https://tools.contrib.com/pages/privacy?d=' + domain + '&container=staffing-script'} />
      <div className="staffing-script"></div>
    </>
  );
};

export default Page;
