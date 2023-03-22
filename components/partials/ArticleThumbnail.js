import { convertDate } from "@/lib/services/globalService";
import Image from "next/image";
import Link from "next/link";
export default function ArticleThumbnail({ item, showDate = true }) {
  const main = item?.data?.main;
  return (
    <Link href={`/articles/${item.id}`}>
      <div className="relative flex overflow-hidden w-auto h-[260px] sm:h-[380px] md:h-[300px] lg:h-[320px] xl:h-[300px] mb-2">
        <Image
          src={main?.thumbnail}
          alt="current events image"
          className="mb-2 w-full object-cover object-center"
          width={400}
          height={0}
        />
      </div>

      {item?.published_at && showDate && (
        <p className="font-semibold text-[#999999] text-xs mt-3">
          {convertDate(item?.published_at)}
        </p>
      )}

      {item?.title && (
        <p
          className="text-[#07336E] text-base lg:text-xl font-semibold mb-1 mt-1"
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item?.title}
        </p>
      )}

      {item?.subtitle && (
        <p className="text-[#5e5e5e] text-sm">{item?.subtitle}</p>
      )}

      {item?.issue && (
        <p className="text-[#3E3E3E] font-bold text-sm">{item?.issue}</p>
      )}

      {item?.location && (
        <p className="text-[#5e5e5e] text-sm italic">{item?.location}</p>
      )}

      {main?.content && (
        <div
          className="text-xs md:text-sm text-[#5e5e5e] font-medium leading-5"
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
          dangerouslySetInnerHTML={{ __html: main?.content }}
        ></div>
      )}
    </Link>
  );
}
