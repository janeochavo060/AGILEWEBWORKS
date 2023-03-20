import pdfImage1 from "@/public/img/pdf_image_1.jpg";
import pdfImage2 from "@/public/img/pdf_image_2.jpg";
import pdfImage3 from "@/public/img/pdf_image_3.jpg";
import pdfImage4 from "@/public/img/pdf_image_4.jpg";

const traningMaterials = {
    slices: [
        {
            sliceType: "training-materials",
            title: "Early Grade Reading Materials",
            description: "ABC+ co-created various early grade reading materials with DepEd teacher-writers, illustrators, and editors. ABC+ also reproduced Wordless Picture Books and Leveled Readers developed by DepEd-USAID's BASA Pilipinas Program.",
            apiUrl: "/page-1", /** index url */
            files: [
                {
                    name: "Central Biko",
                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                    fileSize: "570 mb",
                    files: [
                        {
                            name: "Ang Aming Bahay",
                            type: "pdf",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "94 mb",
                            image: pdfImage1
                        },
                        {
                            name: "Dito Sa Amin",
                            type: "pdf",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "94 mb",
                            image: pdfImage2
                        },
                        {
                            name: "Pano kung nakakatakot ang aking guro",
                            type: "pdf",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "94 mb",
                            image: pdfImage3
                        },
                        {
                            name: "Si Buboy Bote",
                            type: "pdf",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "94 mb",
                            image: pdfImage4
                        }
                    ]
                },
                {
                    name: "English & Filipino (BASA Pilipinas)",
                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                    fileSize: "960 mb",
                    files: [
                        {
                            name: "Si Buboy Bote",
                            type: "pdf",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "94 mb"
                        }
                    ]
                },
                {
                    name: "Hiligaynon",
                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                    fileSize: "849 mb",
                    files: [
                        {
                            name: "Karangalan",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "1.4 gb",
                            files: []
                        }
                    ]
                },
                {
                    name: "Magindanawan",
                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                    fileSize: "1.4 gb",
                    files: [
                        {
                            name: "Grade 1 Decodable - Magindanawan",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "86 mb",
                            files: []
                        },
                        {
                            name: "Grade 1 Leveled Reader - Magindanawan",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "78 mb",
                            files: []
                        },
                        {
                            name: "Grade 2 Leveled Reader - Magindanawan",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "543 mb",
                            files: []
                        },
                        {
                            name: "Grade 3 Leveled Reader - Magindanawan",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "479 mb",
                            files: []
                        },
                        {
                            name: "Wordless Bookes in Magindanawan",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "329 mb",
                            files: [
                                {
                                    name: "Ang Aming Bahay",
                                    type: "pdf",
                                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                                    fileSize: "94 mb",
                                    image: pdfImage1
                                },
                                {
                                    name: "Dito Sa Amin",
                                    type: "pdf",
                                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                                    fileSize: "945 mb",
                                    image: pdfImage2
                                },
                                {
                                    name: "Pano kung nakakatakot ang aking guro",
                                    type: "pdf",
                                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                                    fileSize: "94 mb",
                                    image: pdfImage3
                                },
                                {
                                    name: "Si Buboy Bote",
                                    type: "pdf",
                                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                                    fileSize: "94 mb",
                                    image: pdfImage4
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Minasbate",
                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                    fileSize: "679 mb",
                    files: []
                },
                {
                    name: "Sinugbuanong Binisaya",
                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                    fileSize: "543 mb",
                    files: []
                },
                {
                    name: "Tagalog",
                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                    fileSize: "543 mb",
                    files: []
                },
                {
                    name: "Wordless Picture Books in RV",
                    filePath: "https://www.africau.edu/images/default/sample.pdf",
                    fileSize: "736 mb",
                    files: [
                        {
                            name: "Kalangitan",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "1.4 gb",
                            files: []
                        },
                        {
                            name: "Tagumpay",
                            filePath: "https://www.africau.edu/images/default/sample.pdf",
                            fileSize: "1.4 gb",
                            files: []
                        }
                    ]
                }
            ]
        }
    ]
}

export default traningMaterials; 