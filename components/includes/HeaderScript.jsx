import ScriptContainer from "./ScriptContainer";
import { getData } from "@/lib/data";

const HeaderScript = async () => {
  const c = await getData();

  return (
    <>
      <ScriptContainer
        domain={c.data.domainName}
        accountGA={c.data.accountGA}
        adsenseClientId={c.data.adsenseClientId}
        piwikId={c.data.piwikId}
      />
    </>
  );
};

export default HeaderScript;
