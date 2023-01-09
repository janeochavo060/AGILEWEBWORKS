import '@/styles/globals.css'
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/partials/Header"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <DefaultLayout>
        <div className='text-gray-500'>
          <Component {...pageProps} />
        </div>
      </DefaultLayout>
    </>
    
  )
}
