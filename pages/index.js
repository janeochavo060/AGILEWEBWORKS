import React from "react";
import { props } from "@/lib/props/page";
import dynamic from "next/dynamic";
export const getStaticProps = props;

const Website = ({ page, slices }) => {
  const sliceComponents = slices.map((e) => {
    let key = e?.key === "MainFeature2" ? e?.data?.main?.text : e?.key;
    return dynamic(() => import("@/components/slices/" + key));
  });

  return (
    <>
      {sliceComponents.map((SliceComponent, key) => (
        <SliceComponent key={key} slice={slices[key]?.data} />
      ))}
    </>
  );
};

export default Website;
