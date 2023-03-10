import SecondaryPageHeader from "@/components/slices/SecondaryPageHeader";
import Login from "@/components/slices/login";
import aboutPageData from 'static-data/about';
export default function LoginPage () {
  return (
    <>
      <SecondaryPageHeader slice={aboutPageData?.slices[0]}/>
      <Login />
    </>
  )
} 

