import Image from "next/image";


export default function Bannerblock({ block, mediaHandler }) {
  const { title, description, button_label, button_link } = block?.main;

  return (
    <div className="relative">
      <div className="min-h-[900px] bg-green-500">
        <div className="">
          <div className="text-[#004E98] text-4xl font-extrabold ml-[50px] pt-[24px]">
            {title && <h1 className="">{title}</h1>}

            <h2 dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          {console.log(mediaHandler["main.image"][0]?.original)}
          <Image src={mediaHandler["main.image"][0]?.original} width={700} height={700} alt="banner_image" />
        </div>
      </div>
    </div>
  );
}
