import currentEventsImage4 from "@/public/img/about_us_1.jpg";
import currentEventsImage5 from "@/public/img/current_events_5.jpg";
import currentEventsImage6 from "@/public/img/news_article_2.png";
import currentEventsImage7 from "@/public/img/news_article_1.png";
import currentEventsImage8 from "@/public/img/current_events_8.jpg";
import currentEventsImage9 from "@/public/img/news_article_4.png";
import currentEventsImage10 from "@/public/img/news_article_3.png";

const currentEvents = {
    slices: [
        {
            sliceType: "secondary-page-header",
            backgroundImage: "img/current_events_page_background.jpg",
            title: "News",
            subtitle: "Current Events"
        },
        {
            sliceType: "section-filter",
            filters: []
        },
        {
            sliceType: "section-events",
            events: [
                {
                    image: currentEventsImage4,
                    link: "/",
                    date: "February 3, 2023",
                    title: "ABC+ On the Go",
                    subtitle: "Monthly Newsletter",
                    issue: "February | Issue No. 1",
                    location: "Region V",
                },
                {
                    image: currentEventsImage4,
                    link: "/",
                    date: "January 28, 2023",
                    title: "Progress and Beyond",
                    issue: "January | Digest No. 3",
                    location: "Region IV-A CALABARZON",
                },
                {
                    image: currentEventsImage10,
                    link: "/",
                    date: "January 25, 2023",
                    title: "Current Events Sample 10",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage9,
                    link: "/",
                    date: "January 22, 2023",
                    title: "Current Events Sample 9",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage8,
                    link: "/",
                    date: "January 21, 2023",
                    title: "Current Events Sample 8",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage7,
                    link: "/",
                    date: "January 12, 2023",
                    title: "Current Events Sample 7",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage6,
                    link: "/",
                    date: "January 10, 2023",
                    title: "Current Events Sample 6",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage5,
                    link: "/",
                    date: "December 22, 2022",
                    title: "Current Events Sample 5",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage4,
                    link: "/",
                    date: "December 18, 2022",
                    title: "Current Events Sample 4",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage4,
                    link: "/",
                    date: "December 11, 2022",
                    title: "Current Events Sample 3",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage4,
                    link: "/",
                    date: "December 06, 2022",
                    title: "Current Events Sample 2",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
                {
                    image: currentEventsImage4,
                    link: "/",
                    date: "November 26, 2022",
                    title: "Current Events Sample 1",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design"
                },
            ]
        },
    ]
}

export default currentEvents; 