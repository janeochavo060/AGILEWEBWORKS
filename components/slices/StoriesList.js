import ArticleFilter from "@/components/partials/ArticleFilter";
import ArticleThumbnail from "@/components/partials/ArticleThumbnail";
import COLLECTIONAPI from "@/lib/api/collection/request";
import Jsona from "jsona";
const dataFormatter = new Jsona();
export default function Slice({ slice }) {
  const { page_size } = slice?.main;
  const { id } = slice?.main?.collection_source;

  const { data: parentCollectionHandler, isValidating: parentValidating } = COLLECTIONAPI.getCollectionsSwr(
    `/${id}?include=taxonomies`,
    {
      render: id,
    }
  );

  const parentCollection = dataFormatter.deserialize(
    parentValidating ? {} : parentCollectionHandler
  );

  const { data: collectionsHandler, isValidating } =
    COLLECTIONAPI.getCollectionsSwr(`/${id}/entries?page[size]=${page_size}`, {
      render: id,
    });
  const collections = dataFormatter.deserialize(
    isValidating ? {} : collectionsHandler
  );

  return (
    <>
      <ArticleFilter />
      <div className="w-full xl:flex xl:justify-center">
        {isValidating ? (
          <div className="flex items-center justify-center h-[200px] sm:h-[400px]">
            <p>Loading</p>
          </div>
        ) : (
          <>
            {collections && collections.length && (
              <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-8 w-full">
                    {collections.map((item, i) => (
                      <ArticleThumbnail key={i} item={item} />
                    ))}
                  </div>
                  <div className="flex justify-center my-8 w-full">
                    <button
                      className=" font-bold uppercase bg-[#034F8B] text-xs px-8 text-white rounded-md h-[35px]"
                      onClick={() => {}}
                    >
                      Load more
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
