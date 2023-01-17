import Image from 'next/image'
const S1 = ({ slice }) => {
  console.log(slice, 'Slice')
  return (
    <div className='flex flex-col justify-center items-center w-full lg:h-[500px] h-full lg:mx-0 px-6'>
      <div className='flex justify-start items-start xxl:min-w-[1345px] xl:min-w-[1260px] max-w-full'>
        <div className='flex xxl:max-w-[600px] xl:max-w-[600px] w-full items-center'>
          <div className='flex flex-col items-start '>
            <div className='lg:text-[60px] text-[35px] font-bold text-slate-800'>
              { slice?.main?.heading }
            </div>
            <div className='text-lg text-teal-800 my-2'>
              { slice?.main?.content }
            </div>
            <div className='my-4'>
              <button
                className='flex px-4 py-2 transition ease-in-out delay-150 bg-sky-400 hover:bg-blue-500 hover:to-blue-500 hover:-translate-y-0.5 hover:scale-110 duration-300 rounded-full text-white cursor-pointer'
                onClick={() => {}}
              >
                <span>Learn More</span>
                <Image
                  src="/svg/arrow-right-white.svg"
                  alt="Arrow right"
                  className='mx-1'
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
 )
}
export default S1