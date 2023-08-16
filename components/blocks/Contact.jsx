import ContactForm from "@/components/partials/forms/ContactForm";
export default function MainBanner({ block }) {
  return (
    <div className="m-auto max-w-[600px] mt-12 p-8 border-2 border-[#cacaca]">
      <ContactForm form={block?.main?.form} />
    </div>
  );
}
