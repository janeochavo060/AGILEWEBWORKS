import FormField from "@/components/forms/FormField";
import { useContext, Fragment, useState } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { formSubmit, isError } from "@/lib/services/formService";
export default function GetInTouch() {
  const { form } = useContext(GlobalContext);
  const sections = form?.blueprint?.schema?.sections || [];
  const [errors, setErrors] = useState([]);
  return (
    <>
      {sections.map((section) => {
        const fields = section?.fields || [];
        return (
          <Fragment key={section?.state_name}>
            <form
              onSubmit={(e) =>
                formSubmit(e, "get-in-touch", sections, setErrors)
              }
            >
              <div className="font-extrabold text-[#07336E] text-lg xl:text-xl flex items-center mb-2">
                <div className="bg-[#E11C38] w-[8px] h-[15px] mr-2"></div>
                GET IN TOUCH
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 py-[6px]">
                {fields.map((field) => (
                  <Fragment key={field?.state_name}>
                    <FormField
                      {...field}
                      className={
                        field?.state_name === "message"
                          ? "text-xs border-[0.5px] py-[8.5px] px-3 w-full outline-0 col-span-2"
                          : "text-xs border-[0.5px] py-[8.5px] px-3 w-full outline-0 col-span-2 xl:col-span-1"
                      }
                      error={isError(
                        errors,
                        section?.state_name,
                        field?.state_name
                      )}
                    />
                  </Fragment>
                ))}
              </div>

              <div className="font-extrabold text-[#07336E] text-right mt-1">
                <button>SEND</button>
              </div>
              <hr className="bg-[#07336E] h-[4px] w-[27px] float-right" />
            </form>
          </Fragment>
        );
      })}
    </>
  );
}
