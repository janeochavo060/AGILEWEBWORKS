import Link from 'next/link'
export default function Slice () {
  return (
    <div className="my-16 text-white flex justify-center">
      <div className="w-full p-4 py-16 bg-[#1e4174] text-sm leading-[30px] sm:text-base md:max-w-[670px] md:px-16 md:rounded-3xl">
        <p className="text-center text-2xl lg:text-[27px] font-bold mb-5 ">Login into your account <br/> to download and access our modules</p>
        <p className="text-center m-auto text-sm max-w-[500px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper vitae elit eu convallis. Vestibulum porttitor elit vel turpis finibus volutpat.</p>
        <div className='flex justify-center mt-7'>
          <div className='w-full sm:max-w-[450px]'>
            <input className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] mb-[20px] w-[100%]" type="email" placeholder="Username"/>
            <input className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] mb-[20px] w-[100%]" type="password" placeholder="Password"/>
            <div className="grid grid-cols-2 mt-1">
                <div className='grid grid-rows-2 gap-2'>
                  <Link href="/forgot-password" className='text-sm'>
                    Forgot Password? <span className='font-bold'>Click Here</span>
                  </Link> 
                  <Link href="/Registration" className='text-sm'>
                    No account yet? <span className='font-bold'>Click Here</span>
                  </Link> 
                </div>
                <div className='text-right'>
                  <button className="text-sm border border-solid border-white py-1 px-6 rounded-[4px]" type="submit" value="Submit">
                      LOG IN
                      {/* <p className='ml-8 w-6 border-solid border-b-2 '></p> */}
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}