import tertiaryBanner from 'static-data/tertiaryBanner';
import TertiaryBanner from '@/components/slices/TertiaryBanner';

const Page3 = ({slices,}) => {
    return (
        <>
            {slices.map((slice, index) => {
                return(
                    <div key={index}>
                        {slice.sliceType === "tertiary-page-header" && (
                            <TertiaryBanner slice={slice} />
                        )}
                    </div> 
                ) 
            })}
        </>
    )
};

export async function getStaticProps() {
    const slices = tertiaryBanner.slices;
    return {
      props: {
        slices,
      },
    }
  }

export default Page3