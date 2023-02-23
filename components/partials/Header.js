import Head from 'next/head';
import { useContext } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
const Header = () => {
  const { tenantDetails } = useContext(GlobalContext);
  const metaData = tenantDetails?.data?.meta_data;
  return (
    <>
      <Head>
        <title>{metaData?.title || "Page"}</title>
        <meta name="description" content={metaData?.description || "Description"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="type" property="og:image:type" content="png" />
        <meta name="image" property="og:image" content={ metaData?.image ? `${metaData?.image}` : '/website.png'} />
        <meta name="secure_url" property="og:image:secure_url" content={ metaData?.image ? `${metaData?.image}` : '/website.png'} />
        <link rel="icon" href={ metaData?.ico ? `${metaData?.ico}` : '/favicon.ico'} />
      </Head>
    </>
  )
}

export default Header