import SecondaryPageHeader from "@/components/slices/SecondaryPageHeader";
import Login from "@/components/slices/login";
export default function LoginPage () {
  const data = {
      sliceType: "secondary-page-header",
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

