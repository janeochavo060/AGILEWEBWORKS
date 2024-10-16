import Image from "next/image";

export default function ({ page, mediaHandler }) {
  return (
    <div className="container py-[50px]">
      <Image
        src={mediaHandler["main.image"]?.[0]?.original}
        width={600}
        height={100}
        className="w-full h-[400px] object-cover"
      />
    </div>
  );
}
