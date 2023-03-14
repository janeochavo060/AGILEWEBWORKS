import Link from "next/link";
export default function Slice({slice}) {
  const {login_link = '/', terms_link = '/'} = slice?.main 
  return (
    <div className="p-4 mb-8 md:mb-16 text-[13px]">
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-3xl lg:max-w-4xl">
          <div>
            <p className="mb-[1px]">First Name</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="Mary Jane"
            />
          </div>
          <div>
            <p className="mb-[1px]">Last Name</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="Magbanua"
            />
          </div>
          <div>
            <p className="mb-[1px]">Phone Number</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="+63 915 264 2485"
            />
          </div>
          <div>
            <p className="mb-[1px]">Email Address</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="mj.magbanua@gmail.com"
            />
          </div>
          <div>
            <p className="mb-[1px]">City</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="Mandaluyong"
            />
          </div>
          <div>
            <p className="mb-[1px]">Region</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="National Capital Region"
            />
          </div>
          <div>
            <p className="mb-[1px]">Accupation</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="Public School Teacher (Full Time)"
            />
          </div>
          <div>
            <p className="mb-[1px]">School</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="Juan Sumulong Public School"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-3">
        <div className="w-full md:max-w-3xl lg:max-w-4xl">
          <p className="mb-1">Levels Taught</p>
          <div className="flex justify-center">
            <div className="w-full grid grid-cols-2 gap-1 md:grid-cols-3 md:max-w-3xl lg:max-w-4xl">
              <div class="flex">
                <input type="checkbox" />
                <span class="ml-2">Pre-School</span>
              </div>
              <div class="flex">
                <input type="checkbox" />
                <span class="ml-2">Grade School</span>
              </div>
              <div class="flex">
                <input type="checkbox" />
                <span class="ml-2">Senior High School</span>
              </div>
              <div class="flex">
                <input type="checkbox" />
                <span class="ml-2">Kindergarten</span>
              </div>
              <div class="flex">
                <input type="checkbox" />
                <span class="ml-2">Junior High School</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:max-w-3xl lg:max-w-4xl">
          <div className="">
            <p className="mb-[1px]">Username</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="mjmagbanua"
            />
          </div>
          <div className="hidden md:block"></div>
          <div>
            <p className="mb-[1px]">Password</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="**************"
            />
          </div>
          <div>
            <p className="mb-[1px]">Confirm Password</p>
            <input
              className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]"
              placeholder="**************"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-12 gap-5">
        <div class="flex self-center">
          <input type="checkbox" />
          <p class="ml-2">
            Accept our{" "}
            <Link href={terms_link}>
              <span className="font-bold text-[#07336E]">
                Term and Conditions
              </span>
            </Link>
          </p>
        </div>
        <button className="uppercase self-center bg-[#1e4174] text-white w-64 h-9 rounded-md">
          Create Account
        </button>
        <div className="self-center">
          <p>
            Already have an account?{" "}
            <Link href={login_link}>
              <span className="font-bold text-[#07336E]">Log in here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
