import SecondaryPageHeader from "@/components/slices/SecondaryPageHeader";
import ContactForm from "@/components/slices/ContactForm";

export default function ContactDepEd () {
  const data = {
      backgroundImage: "img/egl_in_the_ph_page_background.jpg",
      title: "Contact Us",
      subtitle: "DepEd"
  }
  return (
    <>
      <SecondaryPageHeader slice={data}/>
      <ContactForm />
    </>
  )
} 

