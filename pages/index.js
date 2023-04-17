import ParentPage from "@/components/page/ParentPage";
import { props } from "@/lib/props/page";
export const getStaticProps = props;
export default function Homepage({ page, blocks }) {
  return <ParentPage page={page} blocks={blocks} />;
}
