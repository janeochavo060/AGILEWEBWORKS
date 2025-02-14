import FormsCon from "@/components/partials/forms/FormsCon";

const FormContact = ({ block }) => {
  return (
    <div className="relative pt-[30px]">
      <div className="w-full  h-full px-[30px] py-[60px]  md:px-[50px] lg:px-[60px] 2xl:px-[216px] lg:py-[123px] font-jomolhari">
        <span className="flex items-center justify-center 2xl:text-[50px] text-[#002F6C] pb-[52px]">
          Get In Touch With Us
        </span>
        <div className=" flex flex-cols-2 rounded-[27px] py-[49px] px-[41px] ">
          <FormsCon form={block?.form.form} />
          <div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
