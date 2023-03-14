import SecondaryPageHeader from "@/components/slices/SecondaryBanner";
import Login from "@/components/slices/LoginForm";
export default function LoginPage () {
  const data = {
      backgroundImage: "img/egl_in_the_ph_page_background.jpg",
      title: "",
      subtitle: "Our Learning Resource Portal"
  }
  return (
    <>
      <SecondaryPageHeader slice={data}/>
      <Login />
    </>
  )
} 

