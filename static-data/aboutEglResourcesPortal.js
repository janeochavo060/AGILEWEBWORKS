import aboutUs1 from "@/public/img/about_us_1.jpg";
import aboutUs2 from "@/public/img/about_us_2.jpg";
import aboutUs3 from "@/public/img/about_us_3.jpg";
import newsArticleImage1 from "@/public/img/news_article_1.png";
import newsArticleImage2 from "@/public/img/news_article_2.png";
import newsArticleImage3 from "@/public/img/news_article_3.png";
import newsArticleImage4 from "@/public/img/news_article_4.png";

const aboutEglInThePh = {
    slices: [
        {
            sliceType: "secondary-page-header",
            backgroundImage: "img/egl_in_the_ph_page_background.jpg",
            title: "About Us",
            subtitle: "State of EGL in the Philippines"
        },
        {
            sliceType: 'leadership-training',
            floatImage: "left",
            image: aboutUs1,
            paragraphTitle: "Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy",
            description: "<p>School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction. <br/><br/> USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.</p>"
        },
        {
            sliceType: "section-image-article",
            tile: "Sample Image",
            value: aboutUs2
        },
        {
            sliceType: 'leadership-training',
            floatImage: "right",
            image: aboutUs3,
            paragraphTitle: "Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy",
            description: "<p>School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction. <br/><br/> USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.</p>"
        },
        {
            sliceType: "articles",
            title: "News & Stories",
            subtitle: "Let's get you updated",
            articles: [
                {
                    image: newsArticleImage1,
                    title: "Sample news article 1",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design",
                    link: "/"
                },
                {
                    image: newsArticleImage2,
                    title: "Sample news article 2 with second line",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design",
                    link: "/"
                },
                {
                    image: newsArticleImage3,
                    title: "Sample news article 3 with longer title will be cut off with ellipsis",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design",
                    link: "/"
                },
                {
                    image: newsArticleImage4,
                    title: "Sample news article 4",
                    description: "Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design Short description only goes here to introduce the article. Will have limited characters so it doesn't break the design",
                    link: "/"
                }
            ]
        }
    ]
}

export default aboutEglInThePh; 