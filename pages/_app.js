import "@/styles/globals.css";
import "@/styles/unreset.css";
import Header from "@/components/_layout/partials/Header";
import DefaultLayout from "@/components/_layout/DefaultLayout";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { GlobalContext } from "@/lib/context/GlobalContext";
import Jsona from "jsona";
const dataFormatter = new Jsona();

export default function App({ Component, pageProps }) {
  const tenantDetails = dataFormatter.deserialize(globalData?.tenantDetails || {});
  const form = dataFormatter.deserialize(globalData?.form || {});
  const menus = dataFormatter.deserialize(globalData?.menus || {});
  return (
    <GlobalContext.Provider value={{tenantDetails, form, menus}}>
      <Header />
      <DefaultLayout>
        <div className="text-dim-black">
          <Component {...pageProps} />
        </div>
      </DefaultLayout>
    </GlobalContext.Provider>
  );
}
