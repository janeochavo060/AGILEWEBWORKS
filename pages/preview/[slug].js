import { useRouter } from "next/router";
import PAGEAPI from "@/lib/api/pages/request";
import Jsona from "jsona";
const dataFormatter = new Jsona();
import { sortBlocks } from "@/lib/services/globalService";
import ParentPage from "@/components/page/ParentBlock";
export default function Previewpage() {
  const router = useRouter();
  const slug = router?.query?.slug;
  const { data } = PAGEAPI.getFindPagesSwr(
    slug,
    "?include=blockContents.block,metaData",
    {
      render: slug,
    }
  );
  const page = dataFormatter.deserialize(data || {});
  const blocksHandler =
    page?.blockContents?.map((e) => {
      return {
        key: e?.block?.component || null,
        order: e?.order || null,
        data: e?.data || null,
      };
    }) || [];
  const blocks = sortBlocks(blocksHandler);
  return <>{page && <ParentPage page={page} blocks={blocks} />}</>;
}
