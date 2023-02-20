// import dynamic from 'next/dynamic'
// import { paths, props } from '@/lib/props/page'
// export const getStaticPaths = paths
// export const getStaticProps = props

export default function Home({ page }) {
  // console.log(page)
  // let slices = [
  //   {
  //     key: 'S1',
  //     data: {}
  //   },
  //   {
  //     key: 'S2',
  //     data: {}
  //   },
  // ]
  // const sliceComponents = slices.map((e) => {
  //   return dynamic(() => import('@/components/slices/' + e.key))
  // })

  return (
    <>
      {/* {sliceComponents.map((SliceComponent, key) => (
         <SliceComponent key={key} slice={slices[key]} />
      ))} */}
    </>
  );
}
