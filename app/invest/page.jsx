import Script from 'next/script';
import { getDomain } from '@/lib/data';
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
