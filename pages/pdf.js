import dynamic from 'next/dynamic';
export default function Pdf () {
  const PdfViewer = dynamic(() => import('@/components/partials/PdfEmbed'), { ssr: false });
  return (
    <PdfViewer file="/pdf/preview.pdf" className="border-solid border-2" width={700} />
  )
};
