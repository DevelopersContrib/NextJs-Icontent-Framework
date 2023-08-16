import Script from "next/script";
import { getDomain } from "@/lib/data";
const Page = () => {
  const domain = getDomain();
  return (
    <>
      <Script
        src={
          "https://tools.contrib.com/pages/apps?d=" +
          domain +
          "&container=apps-script"
        }
      />
      <div className="apps-script"></div>
    </>
  );
};

export default Page;
