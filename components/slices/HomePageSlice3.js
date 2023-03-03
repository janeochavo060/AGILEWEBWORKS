import Image from "next/image";
import Link from "next/link";
import vector from "@/public/img/vector.png";
import newsArticleImage1 from "@/public/img/news_article_1.png";
import newsArticleImage2 from "@/public/img/news_article_2.png";
import newsArticleImage3 from "@/public/img/news_article_3.png";
import newsArticleImage4 from "@/public/img/news_article_4.png";

export default function HomePageSlice3 ({page, slices}) {
    const articles = [
        {
            image: newsArticleImage1,
            title: "Sample news article 1",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: newsArticleImage2,
            title: "Sample news article 2 with second line",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: newsArticleImage3,
            title: "Sample news article 3 with longer title will be cut off with ellipsis",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: newsArticleImage4,
            title: "Sample news article 4",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        
    ];

    return (
        <>
            <div className="flex justify-start items-center mb-2">
                <p className="font-semibold text-[#E11C38] uppercase">
                    <span className='text-[#07336E]'>News & </span>
                    Stories
                </p>
                <Image
                    src={vector}
                    alt="vector"
                    className="mx-1 xl:px-0 px-4"
                    width={150}
                    height={24}
                />
            </div>

            <div className="flex flex-wrap">
                <p className="font-semibold text-4xl mb-8 w-full md:w-1/2 order-1">
                    {"Let's get you updated"}
                </p>

                <div className="flex justify-center md:justify-end mb-8 w-full md:w-1/2 order-3 md:order-2">
                    <button
                        className=" uppercase bg-[#034F8B] py-2 px-8 text-white rounded-lg h-[40px]"
                        onClick={() => {}}
                    >
                        View more
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 w-full order-2 md:order-3">
                    {articles.map((article, i) => (
                        <Link href="/" key={i}>
                            <div className="relative w-auto h-[120px] sm:h-[240px] md:h-[240px] lg:h-[300px] xl:h-[200px]">
                                <Image
                                    src={article.image}
                                    alt="news article image"
                                    className="mb-2"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}
                                />
                            </div>
                            <p
                                className="text-[#07336E] text-xl font-semibold mb-2"
                                style={{
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical"
                                }}
                            >
                                {article.title}
                            </p>
                            <p
                                className="text-[14px] text-[#878989] font-medium"
                                style={{
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical"
                                }}
                            >
                                {article.description}
                            </p>
                        </Link>
                    ))}

                    
                </div>
            </div>
        </>
    )
  };
  