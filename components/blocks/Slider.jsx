import Image from "next/image";
import FancyPhotos from "../partials/popups/FancyPhotos";

export default function Block({ id, test, block, mediaHandler }) {
  const { items } = block?.main;

  console.log("test", test);

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <FancyPhotos fancyId={`Slider-${id}`}>
              <div
                data-fancybox={`Slider-${id}`}
                href={
                  mediaHandler?.[`main.items.${index}.media`]?.[0]?.original
                }
              >
                <Image
                  src={
                    mediaHandler?.[`main.items.${index}.media`]?.[0]?.original
                  }
                  alt={item.title}
                />
              </div>
            </FancyPhotos>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
