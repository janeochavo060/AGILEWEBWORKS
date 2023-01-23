import '@/styles/globals.css'
import "../styles/main.css";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/partials/Header"
// import globalData from "@/lib/preBuildScripts/static/globalData.json";

export default function App({ Component, pageProps }) {
  // console.log(globalData, 'Global')
  return (
    <>
      <Header/>
      <DefaultLayout>
        <div className='text-gray-800'>
          <Component {...pageProps} />
        </div>
      </DefaultLayout>
    </>
    
  )
}
