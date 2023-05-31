import Jsona from "jsona";
const dataFormatter = new Jsona();
import PAGEAPI from "@/lib/api/pages/request";
import { sortBlocks } from "@/lib/services/globalService";
import { iterateBlock } from "@/lib/services/propService";
import { useRouter } from "next/router";
import { useState } from "react";
import ParentBlock from "@/components/page/ParentBlock";
export default function DynamicPage() {
  const router = useRouter();
  const { slug, expires, signature } = router.query;
  const [blocks, setBlocks] = useState([]);
  const { data } = PAGEAPI.getFindPagesSwr(
    slug,
    `?include=blockContents.block,metaData&expires=${expires}&signature=${signature}`,
    {
      render: slug,
    }
  );
  const page = dataFormatter.deserialize(data ?? {});
  const blocksHandler =
    page?.blockContents?.map((e) => {
      return {
        key: e?.block?.component || null,
        order: e?.order || null,
        data: e?.data || null,
      };
    }) || [];
  const sortedBlocks = sortBlocks(blocksHandler);

  const getBlocks = async () => {
    const x = await iterateBlock(sortedBlocks, dataFormatter);
    setBlocks(x);
  };
  getBlocks();
  return <ParentBlock page={page} blocks={blocks} initialBlocks={3} />;
}
