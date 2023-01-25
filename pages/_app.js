import '@/styles/globals.css'
import "@/styles/main.css";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/partials/Header";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps?.name || "Page"}</title>
        <meta name="description" content={pageProps?.id || "Description"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DefaultLayout>
        <div className="text-dim-black">
          <Component {...pageProps} />
        </div>
      </DefaultLayout>
    </>
  );
}