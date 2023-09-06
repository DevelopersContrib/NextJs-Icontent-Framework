import ScriptLoader from "@/components/ScriptLoader";
import { getDomain} from "@/lib/data";

// set dynamic metadata
export async function generateMetadata(){
  
  const domain = getDomain();
   
  return {
    title: 'Refer - '+domain
  };
}

const Page = async () => {
  const html =
    "<script id='referral-script' src='https://www.referrals.com/extension/widget.js?key=356' type='text/javascript'></script>";
  return (
    <>
      <ScriptLoader html={html} />
    </>
  );
};

export default Page;
