import Image from "next/image";
import styles from "@/styles/SingleImageTextBasic.module.css"

export default function SingleImageText({ slice }) {
  // SINGLE IMAGE WITH TEXT BLOCK
  const imageDomain = 'https://s3.ap-southeast-1.amazonaws.com/halcyon-agile-saas-platform-boilerplate/'
  return (
    <section className={`block py-[100px] w-full overflow-hidden`}>
			<div className="px-[15px] max-w-screen-xl mx-auto">
				<div className={`block__image ${slice?.main.image_position === 'left' ? 'float-left pr-[100px]' : 'float-right pl-[100px]'}`}>
					<Image alt={slice?.main.image} src={imageDomain + slice?.main.image} width={500} height={500} className={styles.dimensionAuto}/>
				</div>
				<h2 className="font-bold text-5xl mb-[30px]">
					{slice?.main.title}
				</h2>
				<div className={styles.description} dangerouslySetInnerHTML={{__html: slice?.main.content}} />
			</div>
    </section>
  );
}
