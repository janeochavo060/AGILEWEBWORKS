import traningMaterials from 'static-data/trainingMaterials';
import TrainingMaterials from '@/components/slices/TrainingMaterials';

const Page1 = ({slices,}) => {
    return (
        <>
            {slices.map((slice, index) => {
                return(
                    <div key={index}>
                        {slice.sliceType === "training-materials" && (
                            <TrainingMaterials slice={slice} />
                        )}
                    </div> 
                ) 
            })}
        </>
    )
};

export async function getStaticProps() {
    const slices = traningMaterials.slices;
    return {
      props: {
        slices,
      },
    }
  }

export default Page1