import React from "react";
import { props } from "@/lib/props/page";
import dynamic from "next/dynamic";
import Head from "next/head";
export const getStaticProps = props;

const Website = ({ page, slices }) => {
  const staticSlices = Array(7)
    .fill()
    .map((_, i) => {
      return {
        key: `S${i + 1}`,
      };
    });

  const sliceComponents = staticSlices.map((e) => {
    return dynamic(() => import("@/components/slices/" + e.key));
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
