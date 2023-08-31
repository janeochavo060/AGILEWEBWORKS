import ParentBlock from "@/components/page/ParentBlock";
import { props } from "@/lib/props/page";
export const getStaticProps = props;
export default function Homepage({ page, blocks }) {
  return <ParentBlock page={page} blocks={blocks} />;
}
// import TestComponent1 from "@/components/blocks/TestComponent1";
// import TestComponent2 from "@/components/blocks/TestComponent2";

// export default function Homepage() {
//   return (
//     <>
//       <TestComponent1 />
//       <TestComponent2 />
//     </>
//   );
// }
