import "@/styles/globals.css";
import "@/styles/main.css";
import "@/styles/unreset.css";
import DefaultLayout from "@/layout/DefaultLayout";
import Header from "@/components/partials/Header";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { GlobalContext } from "@/lib/context/GlobalContext";
import Jsona from "jsona";
const dataFormatter = new Jsona();
export default function App({ Component, pageProps }) {
  const tenantDetails = dataFormatter.deserialize(globalData?.tenantDetails || {});
  const form = dataFormatter.deserialize(globalData?.form || {});
  return (
    <GlobalContext.Provider value={{tenantDetails, form}}>
      <Header />
      <DefaultLayout>
        <div className="text-dim-black">
          <Component {...pageProps} />
        </div>
      </DefaultLayout>
    </GlobalContext.Provider>
  );
}
