import Script from "next/script";
import { getDomain} from "@/lib/data";

// set dynamic metadata
export async function generateMetadata(){
  
  const domain = getDomain();
   
  return {
    title: 'About '+domain
   
  };
}

const Page = () => {
  const domain = getDomain();
  return (
    <>
      <Script
        src={
          "https://tools.contrib.com/pages/aboutnew?d=" +
          domain +
          "&container=aboutnew-script"
        }
      />
      <div className="aboutnew-script"></div>
    </>
  );
};

export default Page;
