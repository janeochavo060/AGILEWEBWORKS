import Image from "next/image";
import Link from "next/link";
// import currentEventsImage1 from "@/public/img/.png";
// import currentEventsImage2 from "@/public/img/.png";
// import currentEventsImage3 from "@/public/img/.png";
import currentEventsImage4 from "@/public/img/about_us_1.jpg";
import currentEventsImage5 from "@/public/img/current_events_5.jpg";
import currentEventsImage6 from "@/public/img/news_article_2.png";
import currentEventsImage7 from "@/public/img/news_article_1.png";
import currentEventsImage8 from "@/public/img/current_events_8.jpg";
import currentEventsImage9 from "@/public/img/news_article_4.png";
import currentEventsImage10 from "@/public/img/news_article_3.png";

export default function CurrentEventsPageSlice2 (props) {
    const events = [
        {
            image: currentEventsImage4,
            date: "February 3, 2023",
            title: "ABC+ On the Go",
            subtitle: "Monthly Newsletter",
            issue: "February | Issue No. 1",
            location: "Region V",
        },
        {
            image: currentEventsImage4,
            date: "January 28, 2023",
            title: "Progress and Beyond",
            issue: "January | Digest No. 3",
            location: "Region IV-A CALABARZON",
        },
        {
            image: currentEventsImage10,
            date: "January 25, 2023",
            title: "Current Events Sample 10",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage9,
            date: "January 22, 2023",
            title: "Current Events Sample 9",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage8,
            date: "January 21, 2023",
            title: "Current Events Sample 8",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage7,
            date: "January 12, 2023",
            title: "Current Events Sample 7",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage6,
            date: "January 10, 2023",
            title: "Current Events Sample 6",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage5,
            date: "December 22, 2022",
            title: "Current Events Sample 5",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage4,
            date: "December 18, 2022",
            title: "Current Events Sample 4",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage4,
            date: "December 11, 2022",
            title: "Current Events Sample 3",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage4,
            date: "December 06, 2022",
            title: "Current Events Sample 2",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
        {
            image: currentEventsImage4,
            date: "November 26, 2022",
            title: "Current Events Sample 1",
            description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
        },
    ];

    return (
        <>
            <div className="flex flex-wrap mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 w-full">
                    {events.map((currentEvent, i) => (
                        <Link href="/" key={i}>
                            <div className="relative w-auto h-[120px] sm:h-[240px] md:h-[240px] lg:h-[300px] xl:h-[200px] mb-2">
                                <Image
                                    src={currentEvent.image}
                                    alt="current events image"
                                    className="mb-2"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}
                                />
                            </div>

                            {currentEvent.date && (
                                <p className="font-semibold text-[#999999] text-sm">
                                    {currentEvent.date}
                                </p>
                            )}

                            {currentEvent.title && (
                                <p
                                    className="text-[#07336E] text-xl font-semibold mb-2"
                                    style={{
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical"
                                    }}
                                >
                                    {currentEvent.title}
                                </p>
                            )}

                            {currentEvent.subtitle && (
                                <p className="text-[#575757]">
                                    {currentEvent.subtitle}
                                </p>
                            )}

                            {currentEvent.issue && (
                                <p className="text-[#3E3E3E] font-bold">
                                    {currentEvent.issue}
                                </p>
                            )}

                            {currentEvent.location && (
                                <em className="text-[#686868]">
                                    {currentEvent.location}
                                </em>
                            )}

                            {currentEvent.description && (
                                <p
                                    className="text-[14px] text-[#878989] font-medium"
                                    style={{
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical"
                                    }}
                                >
                                    {currentEvent.description}
                                </p>
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mb-8 w-full">
                    <button
                        className=" uppercase bg-[#034F8B] py-2 px-8 text-white rounded-lg h-[40px]"
                        onClick={() => {}}
                    >
                        Load more
                    </button>
                </div>
            </div>
        </>
    )
  };
  