import React from "react";
import { props } from "@/lib/props/page";
import dynamic from "next/dynamic";
import Head from "next/head";
export const getStaticProps = props;

const Website = ({ page, slices }) => {
  console.log({ slices });
  const sliceComponents = slices.map((e) => {
    let key = e?.key === "MainFeature2" ? e?.data?.main?.text : e?.key;
    return dynamic(() => import("@/components/slices/" + key));
  });

  return (
    <>
      <Head>
        <title>{page?.name || "Page"}</title>
        <meta name="description" content={page?.id || "Description"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sliceComponents.map((SliceComponent, key) => (
        <SliceComponent key={key} slice={slices[key]?.data} />
      ))}
    </>
  );
};

export default Website;
