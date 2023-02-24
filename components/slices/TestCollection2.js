import CollectionAPI from "@/lib/api/collection/request"
import Jsona from 'jsona';
const dataFormatter = new Jsona();
export default function Slice({ slice }) {
  const collectionId = slice?.main?.collection?.id
  const { data } = CollectionAPI.getCollectionsSwr(`/${collectionId}/entries`, {
    render: collectionId
  })
  const collections = dataFormatter.deserialize(data || {}) || []
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-[100px]">
      <h3 className="text-[25px] font-bold mb-[10px]">News Collections</h3>
      <div className="">
        {collections.map((e, i) => (
          <div key={i} className="border-2 w-full p-[10px] mb-[5px]">
            <p className="mb-[5px] font-bold text-[18px]">{e.title}</p>
            <div className="" dangerouslySetInnerHTML={{__html: e?.data?.main?.content}} />
          </div>
        ))}
      </div>
    </div>
  )
}
