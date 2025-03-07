import FormField from "@/components/forms/FormField";
import { Fragment, useState } from "react";
import { formSubmit, isError, RenderCaptcha } from "@/lib/services/formService";
import formStore from "@/lib/store/formStore";
import globalState from "@/lib/store/globalState";
export default function ContactForm({ form }) {
  const formData = formStore((state) => state);
  const captcha = globalState((state) => state.captcha);
  const sections = form?.fields?.blueprint?.schema?.sections || [];
  const [errors, setErrors] = useState([]);
  const findClass = (field) => {
    switch (field) {
      case "name":
        return "border outline-0 border-[#C9AAE1] rounded-[10px] h-[61px] text-[#424242] p-[10px] w-full";
      case "message":
        return "w-full rounded-[5px] border-[1px] border-[#C9AAE1] py-[8.5px] px-3 min-h-[100px]  md:col-span-2";
      case "file":
        return "";
      case "multi_select":
      case "single_select":
        return "react-select cursor-pointer border-[1ppx] h-[35px] pt-[1px] text-sm";
      case "radio_list":
        return "cursor-pointer";
      default:
        return "border outline-0 border-[#C9AAE1] rounded-[20px] h-[35px] text-[#424242] p-[10px] w-[full]";
    }
  };
  const findWrapperClass = (field) => {
    switch (field) {
      case "message":
      case "name":
        return "col-span-1";
      case "radio_list":
        return "flex flex-col";
      default:
        return "col-span-2 sm:col-span-1";
    }
  };
  const [token, setToken] = useState();
  return (
    <>
      {sections.map((section) => {
        const fields = section?.fields || [];
        return (
          <Fragment key={section?.state_name}>
            <form
              onSubmit={(e) =>
                formSubmit({
                  e,
                  formId: form.id,
                  setToken,
                  token,
                  captcha,
                  sections,
                  setErrors,
                  formData,
                })
              }
            >
              <div className="text-sm  grid-cols-1 lg:grid md:grid-cols-2 gap-4 ">
                {fields.map((field) => (
                  <Fragment key={field?.state_name}>
                    <FormField
                      {...field}
                      className={findClass(field?.state_name)}
                      wrapperclassname={findWrapperClass(field?.state_name)}
                      error={isError(
                        errors,
                        section?.state_name,
                        field?.state_name
                      )}
                    />
                  </Fragment>
                ))}
              </div>

              <div className="">
                <RenderCaptcha setToken={setToken} />
              </div>

              <div className="flex items-center justify-center mt-[18px]">
                <div className="mt-[18px]">
                  <button
                    disabled={formData.uploading || formData.submitLoading}
                    className={`${
                      !formData.uploading && !formData.submitLoading
                        ? "cursor-pointer bg-[#0670FA]"
                        : "cursor-not-allowed bg-[#75B0FD]"
                    }  rounded-[10px] text-[#FFFFFF] text-[15px] flex justify-center items-center h-[40px] font-[600] px-[50px] md:px-[80px] `}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </Fragment>
        );
      })}
    </>
  );
}
