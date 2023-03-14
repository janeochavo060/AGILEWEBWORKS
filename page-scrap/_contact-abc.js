import SecondaryPageHeader from "@/components/slices/SecondaryBanner";
import ContactForm from "@/components/slices/ContactForm";

export default function ContactDepEd () {
  const data = {
      backgroundImage: "img/egl_in_the_ph_page_background.jpg",
      title: "Contact Us",
      subtitle: "ABC+ Program"
  }
  return (
    <>
      <SecondaryPageHeader slice={data}/>
      <ContactForm />
    </>
  )
} 

