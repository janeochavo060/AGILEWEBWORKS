import EnvelopIcon from "@/components/svg/EnvelopIcon"
import LocationPin from "@/components/svg/LocationPinIcon"
import MobileIcon from "@/components/svg/MobileIcon"
export default function Slice () {
  return (

    <div className="relative p-4 mb-8 md:mb-16 text-sm xl:text-base">
      <div className="flex flex-col flex-col-reverse lg:flex-row lg:gap-10 xl:w-[1345px] m-auto">
        <div className="w-full">
          <p className="mb-2">If you have any inquiries, comments and suggestions, We would glad to hear it from you. You may message us through our contact information below:</p>
  
          <div className="flex flex-col gap-3 mb-3 lg:gap-5 lg:my-8">
            <div className="flex">
              <div className="px-2">
                <LocationPin width="20px" height="20px" />
              </div>
              <div>
                2nd Floor 
                Department Of Education Building, Deped Meralco Avenue, Pasig, 1605 Metro Manila
              </div>
            </div>
            <div className="flex">
              <div className="px-2">
                <MobileIcon width="20px" height="20px" />
              </div>
              <div>
                919 541 6000
              </div>
            </div>
            <div className="flex">
              <div className="px-2">
                <EnvelopIcon width="18px" height="20px" />
              </div>
              <div>
                info@deped.gov.ph
              </div>
            </div>
          </div>

          <p className="mb-1">Or you may message us using the form below:</p>
          <span className="text-[#07336E]">*fields required</span>

          <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 sm:gap-y-6 sm:py-3">
            <input className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]" placeholder="Name*"/>
            <input className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]" placeholder="Email*"/>
            <input className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]" placeholder="Contact Number "/>
            <input className="border outline-0 border-[#cfcfcf] rounded-[5px] h-[35px] text-[#424242] p-[10px] w-[100%]" placeholder="Select Inquiry"/>
            <textarea name="message" placeholder="Message*" className="rounded-[5px] border-[1px] py-[8.5px] px-3 min-h-[100px] sm:col-span-2" />
          </div>

          <div className="flex justify-between">
            <div></div>
            <div>
              <div className="font-extrabold text-[#07336E] text-right mt-1">
                SEND
              </div>
              <div className="bg-[#07336E] h-[4px] w-[27px] float-right" />
            </div>
          </div>

        </div>
        <div className="w-full mb-5 lg:mb-0">
          <iframe className="w-full h-[300px] sm:h-[350px] lg:h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.676136713872!2d121.05496897288866!3d14.578991824345769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c83a6557654b%3A0x1a329bb886fdf2ed!2sSoho%20Central%20Private%20Residences!5e0!3m2!1sen!2sph!4v1678680197125!5m2!1sen!2sph" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>
  )
}