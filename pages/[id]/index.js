import SliceBackground from '@/components/partials/SliceBackground';
import ContactForm  from '@/components/partials/ContactForm';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { paths, props } from '@/lib/props/page'
export const getStaticPaths = paths
export const getStaticProps = props

export default function Page({ page }) {
  // console.log(page, 'Page')

  const slices = page?.sliceContents?.map(e => {
    return {
        key: e?.slice?.component,
        order: e?.order,
        data: e?.data
    }
  })

  const sortSlice = (list) => {
    return list.sort((a, b)=> a.order - b.order)
  }

  const sliceComponents = sortSlice(slices).map((e) => {
    return dynamic(() => import('@/components/slices/' + e.key))
  })

  return (
    <div>
      <Head>
        <title>{page?.name || 'Page'}</title>
        <meta name="description" content={page?.id || 'Description'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {sliceComponents.map((SliceComponent, key) => (
         <SliceComponent key={key} slice={slices[key].data} />
      ))}

      <SliceBackground>
        <ContactForm/>
      </SliceBackground>

    </div>
  )
}
