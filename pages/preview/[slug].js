import { useRouter } from "next/router";
import PAGEAPI from "@/lib/api/pages/request";
import Jsona from 'jsona';
const dataFormatter = new Jsona();
import { sortSlice } from '@/lib/services/globalService';
import ParentPage from "@/components/page/ParentPage";
export default function Previewpage () {
  const router = useRouter();
  const slug = router?.query?.slug
  const { data } = PAGEAPI.getFindPagesSwr(slug, '?include=sliceContents.slice,metaData', {
    render: slug
  })
  const page = dataFormatter.deserialize(data || {})
  const slicesHandler = page?.sliceContents?.map((e) => {
    return {
      key: e?.slice?.component || null,
      order: e?.order || null,
      data: e?.data || null,
    };
  }) || [];
  const slices = sortSlice(slicesHandler);
  return (
    <>
      {page && <ParentPage page={page} slices={slices} />}
    </>
  )
};
