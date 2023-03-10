import Link from 'next/link'
import React from 'react'

export const LoginForm = ({slice}) => {
  return (
    <div className={`text-white p-[100px]`} style={{backgroundColor: slice.bgColor}}> 
      <div className='container max-w-[700px] mx-auto'>
        <h2 className='text-center text-[35px] font-bold leading-[40px]' dangerouslySetInnerHTML={{ __html: slice.title }} />
       
        <div className="block text-[16px] leading-[24px] text-center my-[40px]" dangerouslySetInnerHTML={{ __html: slice.description }} />

        <div className='px-[50px] mt-[40px]'>
          <form id={slice.form.id} action={slice.form.action}>
            <input className="border outline-0 border-[#a7a7a7] rounded-[5px] h-[35px] text-[#a7a7a7] p-[10px] mb-[20px] w-[100%]" type="email" placeholder="Username"/>
            <input className="border outline-0 border-[#a7a7a7] rounded-[5px] h-[35px] text-[#a7a7a7] p-[10px] mb-[20px] w-[100%]" type="password" placeholder="Password"/>
            <div className='flex mt-[20px] justify-between flex-wrap'>
              <div>
                <Link href="/forgot-password">
                  Forgot Password?
                </Link> 
              </div>
              <div>
                <button className="flex-col font-bold flex text-[20px] flex-column items-end text-right" type="submit" form={slice.form.id} value="Submit">
                    Login
                    <span className="rounded-xl mt-[5px] h-[3px] radius-lg w-[50%] block bg-white"></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
