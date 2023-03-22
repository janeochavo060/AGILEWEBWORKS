import egrmsIcon from "@/public/img/egrms_icon.png";
import trainingMaterialsIcon from "@/public/img/training_materials_icon.png";
import learningToolsIcon from "@/public/img/learning_tools_icon.png";
import imageGalleryIcon from "@/public/img/image_gallery_icon.png";
import videosIcon from "@/public/img/videos_icon.png";
import newsArticleImage1 from "@/public/img/news_article_1.png";
import newsArticleImage2 from "@/public/img/news_article_2.png";
import newsArticleImage3 from "@/public/img/news_article_3.png";
import newsArticleImage4 from "@/public/img/news_article_4.png";

const home = {
    slices: [
        {
            sliceType: "main-page-header",
            backgroundImage: "img/main_page_background.jpg",
            title: "ABC+: Advancing Basic Education in the Philippines"
        },
        {
            sliceType: "project-summary",
            title: "Project Summary",
            subtitle: "The ABC+: Advancing Basic Education in the Philippines",
            description: "<p>The ABC+: Advancing Basic Education in the Philippines project works with DepEd, local governments, and the private sector to address factors that contribute to low learning outcomes in Bicol (Region V) and Western Visayas (Region VI) and is also implementing a smaller set of interventions in select School Divisions in the Bangsamoro Autonomous Region in Muslim Mindanao (BARMM). <br/><br/> ABC+ operates in partnership with central and regional education officials, and local organizations to ensure that evidence-based solutions for improved early literacy and numeracy instruction can be adopted and sustained by the Philippine education system. The project also focuses on fostering a more equitable, inclusive, and nurturing climate for learning in the early grades as part of its social and emotional learning (SEL) focus.</p>"
        },
        {
            sliceType: "section-curriculums",
            title: "Our Resources",
            subtitle: "Developing curriculum and empowering teachers to achieve better learning outcomes",
            curriculums: [
                {
                    label: "EGRMs",
                    link: "/",
                    icon: egrmsIcon,
                    // icon: "egrms-icon"
                },
                {
                    label: "Training Materials",
                    link: "/",
                    icon: trainingMaterialsIcon,
                    // icon: "training-materials-icon"
                },
                {
                    label: "Learning Tools",
                    link: "/",
                    icon: learningToolsIcon,
                    // icon: "learning-tools-icon"
                },
                {
                    label: "Image Gallery",
                    link: "/",
                    icon: imageGalleryIcon,
                    // icon: "image-gallery-icon"
                },
                {
                    label: "Videos",
                    link: "/",
                    icon: videosIcon,
                    // icon: "videos-icon"
                },
            ]
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

export default home; 