import Link from "next/link";
export default function Slice({ slice }) {
  const { title, content } = slice?.main;
  return (
    <div className="my-16 text-white flex justify-center">
      <div className="w-full p-4 py-16 bg-[#1e4174] text-sm leading-[30px] sm:text-base md:max-w-[670px] md:px-16 md:rounded-3xl">
        <p
          className="text-center text-2xl lg:text-[27px] font-bold mb-5 "
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
        <p className="text-center m-auto text-sm max-w-[500px] ">{content}</p>
        <div className="flex justify-center mt-7">
          <div className="w-full sm:max-w-[450px]">
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] mb-[20px] w-[100%]"
              type="email"
              placeholder="Username"
            />
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] mb-[20px] w-[100%]"
              type="password"
              placeholder="Password"
            />
            <div className="grid grid-cols-2 mt-1">
              <div className="flex flex-col gap-1 text-sm">
                <div>
                  Forgot Password? 
                  <Link href="/forgot-password">
                    <span className="ml-1 font-bold">Click Here</span>
                  </Link>
                </div>
                <div>
                  No account yet? 
                  <Link href="/register">
                    <span className="ml-1 font-bold">Click Here</span>
                  </Link>
                </div>
              </div>
              <div className="text-right">
                <button
                  className="text-sm border border-solid border-white py-1 px-6 rounded-[4px]"
                  type="submit"
                  value="Submit"
                >
                  LOG IN
                  {/* <p className='ml-8 w-6 border-solid border-b-2 '></p> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
