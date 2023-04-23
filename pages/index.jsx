import ParentBlock from "@/components/page/ParentBlock";
import { props } from "@/lib/props/page";
export const getStaticProps = props;
export default function Homepage({ page, blocks }) {
  return <ParentBlock page={page} blocks={blocks} />;
}
