import partners1 from "@/public/img/partners_1.png";
import partnersTab1 from "@/public/img/partners_tab_1.png";

const currentEvents = {
    slices: [
        {
            sliceType: "secondary-page-header",
            backgroundImage: "img/our_partners_page_background.png",
            title: "About Us",
            subtitle: "Our Partners"
        },
        {
            sliceType: "tabs",
            data: [
                {
                    tabTitle: "DepEd",
                    image: partnersTab1,
                    title: "Department of Education",
                    description: "<p>School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction. <br/><br/> USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.</p>",
                    link: {
                        label: "Visit the DepEd Website",
                        value: "/partners"
                    }
                },
                {
                    tabTitle: "USAID",
                    image: partnersTab1,
                    title: "USAID",
                    description: "<p>School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction. <br/><br/> USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.</p>",
                    link: {
                        label: "Visit the USAID Website",
                        value: "/partners"
                    }
                },
                {
                    tabTitle: "RTI International",
                    image: partnersTab1,
                    title: "RTI International",
                    description: "<p>School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction. <br/><br/> USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.</p>",
                    link: {
                        label: "Visit the RTI Website",
                        value: "/partners"
                    }
                }
            ]
        },
        {
            sliceType: "leadership-training",
            backgroundColor: "#F3F6F9",
            // backgroundImage: "img/leadership_training_background.png",
            floatImage: "right",
            image: partners1,
            paragraphTitle: "The ABC+ Collaboration",
            description: "<p>School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction. <br/><br/> USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.</p>",
        },
    ]
}

export default currentEvents; 