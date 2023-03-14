import SecondaryPageHeader from "@/components/slices/SecondaryBanner";
import Register from "@/components/slices/RegistrationForm";

export default function RegistrationPage () {
  const data = {
      backgroundImage: "img/egl_in_the_ph_page_background.jpg",
      title: "",
      subtitle: "Create Your Account"
  }
  return (
    <>
      <SecondaryPageHeader slice={data}/>
      <Register />
    </>
  )
} 

