import Script from "next/script";
import { getDomain} from "@/lib/data";

// set dynamic metadata
export async function generateMetadata(){
  
  const domain = getDomain();
   
  return {
    title: 'Contact Us - '+domain
   
  };
}
const Page = () => {
  const domain = getDomain();
  return (
    <>
      <Script
        src={
          "https://tools.contrib.com/pages/contact?d=" +
          domain +
          "&container=contactnew-script"
        }
      />
      <div className="contactnew-script"></div>
    </>
  );
};

export default Page;
