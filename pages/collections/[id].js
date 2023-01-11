import Head from 'next/head'
import dynamic from 'next/dynamic'
import { paths, props } from '@/lib/props/page'
export const getStaticPaths = paths
export const getStaticProps = props

export default function Home({ page }) {
  // console.log(page)
  let slices = [
    {
      key: 'S1',
      data: {}
    },
    {
      key: 'S2',
      data: {}
    },
  ]
  const sliceComponents = slices.map((e) => {
    return dynamic(() => import('@/components/slices/' + e.key))
  })

  return (
    <>
      <Head>
        <title>{page?.name || 'Page'}</title>
        <meta name="description" content={page?.id || 'Description'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {sliceComponents.map((SliceComponent, key) => (
         <SliceComponent key={key} slice={slices[key]} />
      ))}

    </>
  )
}
