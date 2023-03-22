import Image from "next/image";
export default function SingleImageText({ slice }) {
  // SINGLE IMAGE WITH TEXT BLOCK
  return (
    <section className={`block py-[100px] w-full overflow-hidden`}>
      <div className="px-[15px] max-w-screen-xl mx-auto sm:flex block">
        <div
          className={`block__image w-[100%] sm:max-w-[50%] ${
            slice?.main.image_position === "left"
              ? "float-left pr-[100px]"
              : "float-right pl-[100px]"
          }`}
        >
          <Image
            alt={slice?.main.image}
            src={slice?.main.image}
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="w-[100%] sm:max-w-[50%] pl-[30px]">
          <h1 className="font-bold md:text-2xl sm:text-4xl smallerMobile:text-3xl text-2xl mb-[20px]">
            {slice?.main.title}
          </h1>
          <div
            className={`leading-6 lg:text-lg md:text-[16px] text-sm post-description`}
            dangerouslySetInnerHTML={{ __html: slice?.main.content }}
          />
        </div>
      </div>
    </section>
  );
}
