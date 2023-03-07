import FormField from "@/components/forms/FormField";
import Button from "@/components/forms/Button";
import { useContext, Fragment, useState } from "react";
import { GlobalContext } from "@/lib/context/GlobalContext";
import { formSubmit, isError } from '@/lib/services/formService';
export default function Contact() {
  const { form } = useContext(GlobalContext);
  const sections = form?.blueprint?.schema?.sections || [];
  const [errors, setErrors] = useState([])
  return (
    <div className="flex flex-col justify-center items-center max-w-95p md:max-w-2xl w-full mx-auto gap-8 bg-white py-4 px-4">
      {sections.map((section) => {
        const fields = section?.fields || [];
        return (
          <Fragment key={section?.state_name}>
            <h2 className="text-5xl md:text-7xl font-bold text-center text-dim-black mb-16">
              {section?.title}
            </h2>
            <form
              onSubmit={(e) => formSubmit(e, 'contact', sections, setErrors)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg w-full"
            >
              {fields.map((field) => (
                <Fragment key={field?.state_name}>
                  <FormField
                    {...field}
                    className={`placeholder-slate-500 ${field?.state_name === "message" ? "md:col-span-2" : ""}`}
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
  );
}
