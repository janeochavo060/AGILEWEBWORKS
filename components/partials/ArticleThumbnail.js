import Image from "next/image";
import Link from "next/link";
export default function ArticleThumbnail ({ item }) {
  return (

    <Link href="/">
      <div className="relative w-auto h-[260px] sm:h-[380px] md:h-[300px] lg:h-[320px] xl:h-[300px] mb-2">
          <Image
              src={item.image}
              alt="current events image"
              className="mb-2"
              fill
              style={{
                  objectFit: "cover",
                  objectPosition: "center"
              }}
          />
      </div>

      {item.date && (
          <p className="font-semibold text-[#999999] text-xs mt-3">
              {item.date}
          </p>
      )}

      {item.title && (
          <p
              className="text-[#07336E] text-base lg:text-xl font-semibold mb-1 mt-1"
              style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical"
              }}
          >
              {item.title}
          </p>
      )}

      {item.subtitle && (
          <p className="text-[#5e5e5e] text-sm">
              {item.subtitle}
          </p>
      )}

      {item.issue && (
          <p className="text-[#3E3E3E] font-bold text-sm">
              {item.issue}
          </p>
      )}

      {item.location && (
          <p className="text-[#5e5e5e] text-sm italic">
              {item.location}
          </p>
      )}

      {item.description && (
          <p
              className="text-xs xl:text-sm text-[#5e5e5e] font-medium leading-5"
              style={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical"
              }}
          >
              {item.description}
          </p>
      )}
  </Link>
  )
};