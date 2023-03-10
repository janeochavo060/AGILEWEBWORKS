import Link from 'next/link'
export default function Login () {
  return (
    <div className="mt-48 my-16 text-white flex justify-center">
      <div className="p-4 py-16 bg-[#04316C] text-sm sm:text-base md:max-w-[600px] md:px-16 md:rounded-3xl">
        <p className="text-center text-2xl font-bold mb-5">Login into your account to download and access our modules</p>
        <p className="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper vitae elit eu convallis. Vestibulum porttitor elit vel turpis finibus volutpat.</p>
        <div className='flex justify-center'>
          <div className='w-full sm:max-w-[400px]'>
            <input className="border outline-0 border-[#a7a7a7] rounded-[5px] h-[35px] text-[#a7a7a7] p-[10px] mb-[20px] w-[100%]" type="email" placeholder="Username"/>
            <input className="border outline-0 border-[#a7a7a7] rounded-[5px] h-[35px] text-[#a7a7a7] p-[10px] mb-[20px] w-[100%]" type="password" placeholder="Password"/>
            <div className="grid grid-cols-2">
                <div className='grid grid-rows-2 gap-1'>
                  <Link href="/forgot-password" className='text-sm'>
                    Forgot Password? <span className='font-bold'>Click Here</span>
                  </Link> 
                  <Link href="/Registration" className='text-sm'>
                    No account yet? <span className='font-bold'>Click Here</span>
                  </Link> 
                </div>
                <div className='text-right'>
                  <button className="border border-solid border-white py-1 px-5 rounded-md sm:pb-0" type="submit" value="Submit">
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

