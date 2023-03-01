import FormField from "@/components/forms/FormField";
import Button from "@/components/forms/Button";
import { Fragment, useState } from "react";
import { formSubmit, isError } from '@/lib/services/formService';
export default function Slice({ slice }) {
  const id = slice?.main?.form?.id
  const sections = slice?.main?.form?.fields?.blueprint?.schema?.sections || [];

  const [errors, setErrors] = useState([])
  return (
    <div className="max-w-screen-xl mx-auto w-full mt-[120px]">
      <div className="flex flex-col justify-center items-center max-w-95p md:max-w-2xl w-full mx-auto gap-8 bg-white py-12 px-4">
        {sections.map((section) => {
          const fields = section?.fields || [];
          return (
            <Fragment key={section?.state_name}>
              <form
                onSubmit={(e) => formSubmit(e, id, sections, setErrors)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg w-full"
              >
                {fields.map((field) => (
                  <Fragment key={field?.state_name}>
                    <FormField
                      {...field}
                      className={field?.state_name === "message" ? "md:col-span-2" : ""}
                      error={isError(errors, section?.state_name, field?.state_name)}
                    />
                  </Fragment>
                ))}
                <div className="md:col-span-2 text-center">
                  <Button className="black-shadow" label="Submit" type="submit" />
                </div>
              </form>
            </Fragment>
          );
        })}
      </div>
    </div>
  )
}
