import Script from "next/script";
import { getDomain } from "@/lib/data";
const Page = () => {
  const domain = getDomain();
  return (
    <>
      <Script
        src={
          "https://tools.contrib.com/pages/partner?d=" +
          domain +
          "&container=aboutnew-script"
        }
      />
      <div className="aboutnew-script"></div>
    </>
  );
};

export default Page;