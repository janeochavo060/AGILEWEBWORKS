import Jsona from "jsona";
const dataFormatter = new Jsona();
import CONTENTAPI from "@/lib/api/content/request";
import { useState } from "react";
export default function Block({ block }) {
  const { taxonomy_preload, collection, limit } = block?.main;
  const taxonomies = taxonomy_preload?.taxonomy?.taxonomyTerms || [];
  const [activeTaxonomy, setActiveTaxonomy] = useState("");
  const [meta, setMeta] = useState(collection.contentsMeta);
  const [apartments, setApartments] = useState(collection.contents);
  CONTENTAPI.getContentsSwr(
    `/${collection?.id}/entries?page[size]=${limit}&filter[taxonomies][${taxonomy_preload?.id}]=${activeTaxonomy}`,
    {
      render: activeTaxonomy && collection?.id && taxonomy_preload?.id,
      revalidateOnFocus: false,
      onSuccess: (res) => {
        setApartments(dataFormatter.deserialize(res.data));
        setMeta(res.data.meta);
      },
    }
  );
  const loadMore = () => {
    if (meta.current_page < meta.last_page) {
      CONTENTAPI.getContents(
        collection.id,
        `?page[size]=${limit}&page[number]=${
          meta.current_page + 1
        }&filter[taxonomies][${taxonomy_preload?.id}]=${activeTaxonomy}`
      ).then((res) => {
        const newCollections = dataFormatter.deserialize(res);
        setApartments((state) => [...state, ...newCollections]);
        setMeta(res.meta);
      });
    }
  };
  return (
    <div>
      <div className="flex flex-row gap-4">
        <div
          onClick={() => {
            setApartments(collection.contents);
            setMeta(collection.contentsMeta);
            setActiveTaxonomy("");
          }}
        >
          All
        </div>
        {taxonomies.map((n, i) => (
          <div onClick={() => setActiveTaxonomy(n.id)} key={i}>
            {n.name}
          </div>
        ))}
      </div>
      <div>
        {apartments.map((n, i) => (
          <p key={i}>{n.title}</p>
        ))}
        {meta?.current_page < meta?.last_page && (
          <button className="p-2 bg-[red]" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
