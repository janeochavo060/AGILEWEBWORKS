import "@/styles/globals.css";
import "@/styles/customs.css";
import DefaultLayout from "@/components/_layout/DefaultLayout";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { GlobalContext } from "@/lib/context/GlobalContext";
import globalState from "@/lib/store/globalState";
import { useEffect, useState } from "react";
import { token } from "@/lib/services/globalService";

export default function App({ Component, pageProps }) {
  const { page } = pageProps;
  const tenantDetails = globalData?.tenantDetails;
  const form = globalData?.form;
  const menus = globalData?.menus;
  const [loadGuest, setLoadGuest] = useState(false);
  const [loadPrivate, setLoadPrivate] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (token()) {
      setLoadPrivate(true);
    } else {
      setLoadGuest(true);
    }
    setRedirect(true);
    const handleScroll = () => {
      globalState.setState({
        showLazy: true,
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const RootComponent = () => {
    return (
      <GlobalContext.Provider value={{ tenantDetails, form, menus }}>
        <DefaultLayout>
          <div className="text-dim-black">
            <Component {...pageProps} />
          </div>
        </DefaultLayout>
      </GlobalContext.Provider>
    );
  };

  if (page?.visibility === "public") {
    return <RootComponent />;
  } else if (page?.visibility === "guest") {
    if (loadGuest) {
      return <RootComponent />;
    } else if (redirect) {
      window.location.href = "/";
    }
  } else if (page?.visibility === "authenticated") {
    if (loadPrivate) {
      return <RootComponent />;
    } else if (redirect) {
      window.location.href = "/";
    }
  } else {
    return <RootComponent />;
  }
}
