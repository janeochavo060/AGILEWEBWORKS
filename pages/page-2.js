import pdfDetails from 'static-data/pdfDetails';
import PdfDetails from '@/components/slices/PdfDetails';
import RelatedResources from '@/components/slices/RelatedResources';

const Page2 = ({slices,}) => {
    return (
        <>
            {slices.map((slice, index) => {
                return(
                    <div key={index}>
                        {slice.sliceType === "pdf-details" && (
                            <PdfDetails slice={slice} />
                        )}
                        {slice.sliceType === "related-resources" && (
                            <RelatedResources slice={slice} />
                        )}
                    </div> 
                ) 
            })}
        </>
    )
};

export async function getStaticProps() {
    const slices = pdfDetails.slices;
    return {
      props: {
        slices,
      },
    }
  }

export default Page2