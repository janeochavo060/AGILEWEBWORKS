import FORMAPI from "@/lib/api/forms/request";
import { Fragment } from "react";
import Jsona from "jsona";
const dataFormatter = new Jsona();
import FormField from "../forms/FormField";
import Button from "../forms/Button";
import globalData from "@/lib/preBuildScripts/static/globalData.json";

export default function Contact() {
  const { form: formData } = globalData
  const form = dataFormatter.deserialize(formData || {});
  const sections = form?.blueprint?.schema?.sections || [];

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {};
    sections.map((section) => {
      let sectionPayload = {};
      let fields = section?.fields || [];
      fields.map(
        (field) =>
          (sectionPayload[field.state_name] = e.target[field.state_name].value)
      );
      payload[section?.state_name] = sectionPayload;
    });

    FORMAPI.submitForm('contact', payload)
    .then((res) => {
      console.log({ res });
      e.target.reset();
    })
    .catch((err) => {
      console.log({ err });
    });
  };

  return !form ? (
    <></>
  ) : (
    <div className="flex flex-col justify-center items-center max-w-95p md:max-w-2xl w-full mx-auto gap-8 bg-white py-12 px-4">
      {sections.map((section) => {
        const fields = section?.fields || [];
        return (
          <Fragment key={section?.state_name}>
            <h2 className="text-5xl md:text-7xl font-bold text-center text-dim-black mb-16">
              {section?.title}
            </h2>
            <form
              onSubmit={(e) => onSubmit(e, section)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg w-full"
            >
              {fields.map((field) => (
                <Fragment key={field?.state_name}>
                  <FormField
                    {...field}
                    className={
                      field?.state_name === "message" ? "md:col-span-2" : ""
                    }
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
