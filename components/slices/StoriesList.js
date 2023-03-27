import ArticleFilter from "@/components/partials/ArticleFilter";
import ArticleThumbnail from "@/components/partials/ArticleThumbnail";
import COLLECTIONAPI from "@/lib/api/collection/request";
import TAXONOMYAPI from "@/lib/api/taxonomy/request";
import Jsona from "jsona";
const dataFormatter = new Jsona();
import useArticleFilterStore from "@/lib/store/articleFilter";
export default function Slice({ slice }) {
  const { page_size } = slice?.main;
  const { id } = slice?.main?.collection_source;

  const { data: parentCollectionHandler, isValidating: parentValidating } =
    COLLECTIONAPI.getCollectionsSwr(`/${id}?include=taxonomies`, {
      render: id,
      revalidateOnFocus: false,
    });

  const parentCollection = dataFormatter.deserialize(
    parentValidating ? {} : parentCollectionHandler
  );

  const taxonomy = parentCollection?.taxonomies?.filter(
    (e) => e.name === "Regions"
  )[0];

  const { data: taxonomyHandler } = TAXONOMYAPI.findTaxonomySwr(
    taxonomy?.id,
    "",
    {
      render: id && taxonomy?.id,
      revalidateOnFocus: false,
    }
  );

  const taxonomies = dataFormatter.deserialize(
    taxonomyHandler ? taxonomyHandler : {}
  )?.taxonomyTerms?.map((e) => {
    return {
      value: e.id,
      label: e.name,
    };
  }) || [] ;

  const sort = useArticleFilterStore((state) => state.sort);
  const meta = useArticleFilterStore((state) => state.meta);
  const setMeta = useArticleFilterStore((state) => state.setMeta);
  const isLoading = useArticleFilterStore((state) => state.isLoading);
  const setIsLoading = useArticleFilterStore((state) => state.setIsLoading);
  const allCollections = useArticleFilterStore((state) => state.allCollections);
  const setAllCollections = useArticleFilterStore(
    (state) => state.setAllCollections
  );

  const updateMeta = (data) => {
    setMeta(data);
  };

  const { isValidating } = COLLECTIONAPI.getCollectionsSwr(
    `/${id}/entries?page[size]=${page_size}&sort=${sort}`,
    {
      render: id,
      revalidateOnFocus: false,
      onSuccess: (res) => {
        if (res) {
          const collections = dataFormatter.deserialize(res?.data || {});
          setAllCollections(collections);
          updateMeta(res?.data?.meta);
        }
      },
    }
  );

  const loadMore = () => {
    if (meta?.current_page < meta?.last_page) {
      setIsLoading(true);
      COLLECTIONAPI.getCollections(
        id,
        `?page[size]=${page_size}&sort=${sort}&page[number]=${
          meta?.current_page + 1
        }`
      ).then((res) => {
        const newCollections = dataFormatter.deserialize(res);
        const mergedCollections = [...allCollections, ...newCollections];
        setAllCollections(mergedCollections);
        setIsLoading(false);
        if (res?.meta) {
          updateMeta(res.meta);
        }
      });
    }
  };

  return (
    <>
      <ArticleFilter regions={taxonomies} />
      <div className="w-full xl:flex xl:justify-center">
        {isValidating ? (
          <div className="flex items-center justify-center h-[200px] sm:h-[400px]">
            <p>Loading</p>
          </div>
        ) : (
          <>
            {allCollections.length && (
              <div className="xl:w-[1345px] pt-4">
                <div className="flex flex-wrap px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-8 w-full">
                    {allCollections.map((item, i) => (
                      <ArticleThumbnail key={i} item={item} />
                    ))}
                  </div>
                  <div className="flex justify-center my-8 w-full">
                    {meta?.current_page < meta?.last_page && (
                      <button
                        disabled={isLoading}
                        className={`font-bold uppercase text-xs px-8 text-white rounded-md h-[35px] ${
                          isLoading
                            ? "bg-[#cdcdcd] cursor-progress"
                            : "bg-[#034F8B]"
                        }`}
                        onClick={loadMore}
                      >
                        {isLoading ? "Loading..." : "Load more"}
                      </button>
                    )}
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
