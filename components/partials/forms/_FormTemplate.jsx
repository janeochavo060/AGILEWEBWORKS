import FormField from "@/components/forms/FormField";
import { Fragment, useState } from "react";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import { formSubmit, isError, RenderCaptcha } from "@/lib/services/formService";
export default function BannerForm() {
  const { form } = globalData;
  const sections = form?.blueprint?.schema?.sections || [];
  const [errors, setErrors] = useState([]);
  const findClass = (field) => {
    switch (field) {
      case "phone":
      case "full_name":
      case "email":
        return "bg-transparent border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f36523] focus:border-transparent p-3 w-full";
      case "message":
        return "h-[115px] bg-transparent border border-gray-300 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f36523] focus:border-transparent w-full";
      default:
        return "";
    }
  };
  const findWrapperClass = (field) => {
    switch (field) {
      case "full_name":
      case "message":
        return "col-span-2";
      default:
        return "";
    }
  };

  return (
    <div className="relative xl:order-first xl:absolute z-[11] right-0 xl:py-6 2xl:py-10 xl:px-10">
      <div className="flex flex-col items-start w-full xl:max-w-[420px] h-full bg-[#000000b3] text-white">
        <div className="relative gap-y-6 flex flex-col w-full h-full justify-center px-4 py-10 xl:px-8 lg:py-12">
          <div className="text-white text-[30px] border-l-[7px] border-[#f36523]">
            <p className="ml-2">Inquire Now</p>
          </div>

          {sections.map((section) => {
            const fields = section?.fields || [];
            return (
              <Fragment key={section?.state_name}>
                <p className="text-white text-sm italic">All fields required</p>
                <form
                  onSubmit={(e) =>
                    formSubmit(e, "contact-form", null, sections, setErrors)
                  }
                >
                  <div className="grid grid-cols-2 gap-6">
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
                          errortype="border"
                        />
                      </Fragment>
                    ))}
                  </div>
                  {form?.attributes?.uses_captcha && (
                    <RenderCaptcha setToken={setToken} />
                  )}
                  <button
                    name="Submit"
                    className="mt-4 w-[200px] bg-[#f36523] max-w-[130px] rounded-lg py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f36523] focus:border-transparent font-bold flex flex-row transform transition-all duration-200 hover:scale-110"
                  >
                    S E N D
                  </button>
                </form>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
