import '@/styles/globals.css'
import "../styles/main.css";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/partials/Header"
export default function App({ Component, pageProps }) {
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
