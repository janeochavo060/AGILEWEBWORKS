import SecondaryPageHeader from "@/components/slices/SecondaryPageHeader";
import LeadershipTraining from "@/components/slices/LeadershipTraining";
import partners1 from "@/public/img/partners_1.png";
export default function LoginPage () {
  const banner = {
      backgroundImage: "img/egl_in_the_ph_page_background.jpg",
      title: "ABOUT US",
      subtitle: "ABC+"
  }
  const leadership = {
    paragraphTitle: "What is ABC+?",
    image: partners1,
    description: "<p>School leaders developed and implemented their projects after attending USAID's \"Instructional Leadership Training: Strengthening Learning Conditions for Early Literacy.\" The training focused on developing literacy leaders who can foster conditions for integrating social and emotional learning, gender equity and social inclusion, and developmentally appropriate practices to support quality literacy instruction. <br/><br/> USAID officials, DepEd representatives, educators from DepEd Regions 5 and 6, and other key partners and stakeholders attended the conference where teachers and administrators shared their results.</p>",
    link: '',
    coverImage: true
  }
  return (
    <>
      <SecondaryPageHeader slice={banner}/>
      <LeadershipTraining slice={leadership} />
    </>
  )
} 

