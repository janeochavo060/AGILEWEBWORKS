import React from "react";
import { props } from "@/lib/props/page";
import dynamic from "next/dynamic";
export const getStaticProps = props;
const Homepage = ({ page, slices }) => {
  const sliceComponents = slices.map((e) => {
    let key = e?.key === "MainFeature2" ? e?.data?.main?.text : e?.key;
    return dynamic(() => import("@/components/slices/" + key));
  });

  return (
    <>
      {sliceComponents.map((SliceComponent, key) => {
        let data = {
          ...slices[key]?.data,
          id: `${slices[key]?.key}-${key}`,
        };
        return <SliceComponent key={key} slice={data} />;
      })}
    </>
  );
};

export default Homepage;
