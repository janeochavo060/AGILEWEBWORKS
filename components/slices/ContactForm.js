import EnvelopIcon from "@/components/svg/EnvelopIcon";
import LocationPin from "@/components/svg/LocationPinIcon";
import MobileIcon from "@/components/svg/MobileIcon";
import ContactForm from "@/components/partials/ContactForm";
export default function Slice({ slice }) {
  const main = slice?.main;
  return (
    <div className="relative p-4 mb-8 md:mb-16 text-sm xl:text-base">
      <div className="flex flex-col flex-col-reverse lg:flex-row lg:gap-10 xl:w-[1345px] m-auto">
        <div className="w-full">
          <p className="mb-2">
            If you have any inquiries, comments and suggestions, We would glad
            to hear it from you. You may message us through our contact
            information below:
          </p>
          <div className="flex flex-col gap-3 mb-3 lg:gap-5 lg:my-8">
            <div className="flex">
              <div className="px-2">
                <LocationPin width="17px" height="17px" />
              </div>
              <div>{main?.address}</div>
            </div>
            <div className="flex">
              <div className="px-2">
                <MobileIcon width="17px" height="17px" />
              </div>
              <div>{main?.contact_number}</div>
            </div>
            <div className="flex">
              <div className="px-2">
                <EnvelopIcon width="15px" height="17px" />
              </div>
              <div>{main?.email}</div>
            </div>
          </div>
          <p className="mb-1">Or you may message us using the form below:</p>
          <span className="text-[#07336E]">*fields required</span>
          <ContactForm form={main?.form} />
        </div>
        <div className="w-full mb-5 lg:mb-0">
          <iframe
            className="w-full h-[300px] sm:h-[350px] lg:h-full rounded-xl"
            src={main?.embed_map}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
