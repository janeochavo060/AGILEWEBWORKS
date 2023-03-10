import Image from "next/image";
import vector from "@/public/img/vector.png";
export default function VectorImage () {
  return (
    <div className="relative w-[70px] h-[24px] sm:w-[80px] md:w-[100px] lg:w-[110px]">
      <Image
        src={vector}
        alt="vector"    
        fill
        className="mx-2"
        style={{
        objectFit: "contain",
        objectPosition: "center",
        }}
      />
    </div>
  )
};