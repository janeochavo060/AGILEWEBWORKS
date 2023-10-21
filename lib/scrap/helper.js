// import { useBottomScrollListener } from "react-bottom-scroll-listener";
// useBottomScrollListener(() => {
//   const newParams = {
//     ...parameters,
//     "page[number]": parameters["page[number]"] + 1,
//   };
//   loadMore(
//     `${profile ? "/auth/products" : "/products"}?${paramsToString(newParams)}`
//   );
// });

// const initial = useRef(true);
// useEffect(() => {
//   if (initial.current) {
//     initial.current = false;
//   }
// }, []);

// Find Media
// const x = {};
// Object.keys(data?.main || {}).map((e, i) => {
//   const isArray = typeof data.main[e];
//   if (isArray && data.main[e].length) {
//     const k = data.main[e][0];
//     const a = blueprintData.find((n) => n?.attributes?.value?.includes(k));
//     if (a) {
//       x[e] = a?.attributes?.media.map((e1) => {
//         return {
//           original: e1?.attributes?.original_url,
//           conversions: e1?.attributes?.generated_conversions,
//         };
//       });
//     }
//   }
// });
// console.log(x, "media");

// import { getMediaConvertions } from "@/lib/services/propService";
// console.log(getMediaConvertions(media?.attributes?.blueprintData));
