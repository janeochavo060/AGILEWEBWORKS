import dynamic from 'next/dynamic'
const S1 = dynamic(() => import('@/components/slices/S1'))
import { paths, props } from '@/lib/props/page'
export const getStaticPaths = paths
export const getStaticProps = props

export default function Home({ page }) {
  return (
    <>
      <S1/>
      {page.name}
    </>
  )
}
