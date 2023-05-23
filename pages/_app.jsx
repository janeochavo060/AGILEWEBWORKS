import "tw-elements/dist/css/tw-elements.min.css";
import "@/styles/globals.css";
import "@/styles/customs.css";
import DefaultLayout from "@/components/_layout/DefaultLayout";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { GlobalContext } from "@/lib/context/GlobalContext";
import globalState from "@/lib/store/globalState";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleScroll = () => {
      globalState.setState({
        showLazy: true,
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);
  const tenantDetails = globalData?.tenantDetails;
  return (
    <GlobalContext.Provider value={{ tenantDetails }}>
      <DefaultLayout>
        <div className="text-dim-black">
          <Component {...pageProps} />
        </div>
      </DefaultLayout>
    </GlobalContext.Provider>
  );
}
