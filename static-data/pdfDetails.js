import pdfImage1 from "@/public/img/pdf_image_1.jpg";
import pdfImage2 from "@/public/img/pdf_image_2.jpg";
import pdfImage3 from "@/public/img/pdf_image_3.jpg";
import pdfImage4 from "@/public/img/pdf_image_4.jpg";

const pdfDetails = {
    slices: [
        {
            sliceType: "pdf-details",
            title: "Pano kung nakakatakot ang aking guro",
            image: pdfImage3,
            type: "Leaning Material | PDF",
            publishedAt: "July 24, 2021",
            filePath: "https://www.africau.edu/images/default/sample.pdf",
            description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt dignissim odio. Nullam id consectetur magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Phasellus sollicitudin magna at mauris blandit hendrerit.</p>",
            objective: "<ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt dignissim odio</li><li>Nullam id consectetur magna. Vestibulum ante ipsum primis in faucibus orci luctus.</li><li>Ultrices posuere cubilia curae; In hac habitasse platea dictumst.</li><li>Phasellus sollicitudin magna at mauris blandit hendrerit.</li></ol>",
            curriculumInformation: {
                educationType: "Alternative Learning System",
                gradeLevel: "Basic Literacy",
                learningArea: "Filipino",
                contentTopic: "Literature",
                intendedUsers: "Educators, Learners",
                competencies: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt dignissim odio. Nullam id consectetur magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            },
            copyrightInformation: {
                developer: "Sharlene Pagot",
                copyright: "Yes",
                copyrightOwner: "DepEd",
                conditionsOfUse: "Use, Copy, Print"
            },
            technicalInformation: {
                fileSize: "94 mb",
                fileType: "PDF",
                numOfPages: "44 pages"
            }
        },
        {
            sliceType: "related-resources",
            resources: [
                {
                    image: pdfImage1,
                    title: "Ang Aming Bahay.pdf"
                },
                {
                    image: pdfImage2,
                    title: "Dito Sa Amin.pdf"
                },
                {
                    image: pdfImage3,
                    title: "Pano kung nakakatakot ang aking guro.pdf"
                },
                {
                    image: pdfImage4,
                    title: "Si Buboy Bote.pdf"
                },
            ]
        }
    ]
}

export default pdfDetails; 