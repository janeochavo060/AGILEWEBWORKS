import FormsCon from "@/components/partials/forms/FormsCon";

const FormContact = ({ block }) => {
  return (
    <div className="relative pt-[30px]">
      <div className="w-full  h-full px-[30px] py-[60px]  md:px-[50px] lg:px-[60px] 2xl:px-[216px] lg:py-[123px] font-jomolhari">
        <span className="flex items-center justify-center text-[20px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] text-[#002F6C] p-[52px]">
          Get In Touch With Us
        </span>
        <div className="grid md:grid-cols-3  rounded-[27px] px-[20px] py-[30px] md:py-[49px] md:px-[41px] bg-[#C0C0C0]">
          <div className="md:col-span-2">
            <FormsCon form={block?.form.form} />
          </div>
          <div className="w-full p-[10px] flex justify-center">
            <div className="relative p-[30.25%] w-full max-w-[487px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.25274021387!2d121.05664127510587!3d14.58466918589981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9d577c260f3%3A0x5b70d59ce119bff8!2sThe%20Podium%20West%20Tower!5e0!3m2!1sen!2sph!4v1739762255783!5m2!1sen!2sph"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 rounded-[6px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
