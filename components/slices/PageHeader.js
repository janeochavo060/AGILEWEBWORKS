export default function PageHeader (props) {
    return (
        <div
            className='relative w-auto mt-24 h-[220px] sm:mt-32 sm:h-[320px] md:h-[420px] lg:h-[600px] xl:mt-20 xl:h-[800px]'
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255, 0) 40%, rgba(255,255,255) 100%), url(${props.pageBackgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
        >
            <div className='absolute bottom-[-20%] md:bottom-[-10%] xl:bottom-0 w-full'>
                <div className='flex justify-center w-full'>
                    <div className='bg-white rounded-3xl'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
  };
  