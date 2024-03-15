"use client";
import React, { useRef, useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { ContactFormSchema } from "@/utils/formik-schema";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import ArrowPurple from "../../../../public/images/icons/arrow-purple.svg";
import CrossPurple from "../../../../public/images/icons/cross-purple.svg";
import Spinner from "../spinner/spinner";
import useSectionInView from "@/utils/useSectionInView";

type FormValue = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  terms?: boolean;
};

const Contact = () => {
  const fieldTypes = {
    firstName: "text",
    lastName: "text",
    email: "text",
    message: "textarea",
    terms: "checkbox",
  };

  const placeholders: FormValue = {
    firstName: "Vorname",
    lastName: "Nachname",
    email: "Email",
    message: "Nachricht",
  };

  const initialValues: FormValue = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    terms: false,
  };

  const formFields = ["firstName", "lastName", "email", "message", "terms"];

  const formRef = useRef<HTMLDivElement | null>(null);
  const [isFormActive, setIsFormActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const { ref } = useSectionInView("#kontakt");

  const { contextSafe } = useGSAP();

  const expandForm = contextSafe(() => {
    if (!isFormActive) {
      gsap.to(formRef.current, {
        height: "auto",
        marginTop: `${window.innerWidth >= 1024 ? "40px" : "20px"}`,
        duration: 0.4,
      });
    } else {
      gsap.to(formRef.current, {
        height: 0,
        marginTop: "0px",
        marginBottom: "0px",
        duration: 0.4,
      });
    }

    setIsFormActive(!isFormActive);
  });

  const onSubmit = async (
    values: FormValue,
    formikHelpers: FormikHelpers<FormValue>,
  ) => {
    try {
      setLoading(true);
      const emailTemplate = `<div>
<p>New inquiry from: ${values.firstName} ${values.lastName} - ${values.email} </p>
<p>Message: ${values.message} </p>
</div>`;
      const res = await fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          firtName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          message: values.message,
          htmlContent: emailTemplate,
        }),
      });
      const data = await res.json();
      if (data === 202) {
        setToastMessage("Die Email wurde verschickt");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          formikHelpers.resetForm();
        }, 1000);
      } else {
        setToastMessage(`Fehler: Fehler beim Senden der E-Mail`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={ref} id="kontakt" className="bg-red py-6 md:py-[4.85vw]">
      <div className="container 2xl:my-2">
        <h3 className="font-area-extrabold md:text-[1.438rem] mb-[0.678rem] text-light-purple">
          Kontakt
        </h3>

        <div className=" cursor-pointer flex justify-between items-start gap-7 relative">
          <p className="flex flex-col font-area-thin text-white text-[clamp(1rem,2.4vw,2.813rem)]">
            <span>
              Sie haben Fragen zu unserem Projekt, oder sind interessiert?
            </span>

            <span>Schreiben Sie uns gerne eine Nachricht!</span>
          </p>

          <div className="relative">
            {!isFormActive && (
              <Image
                onClick={expandForm}
                src={ArrowPurple}
                width={63}
                height={71}
                alt=""
                className="opacity-100 group-hover:opacity-100 transition-all ease-in-out duration-300 w-[1.75rem] lg:w-auto max-w-[2.75rem]"
              />
            )}

            {isFormActive && (
              <Image
                onClick={expandForm}
                src={CrossPurple}
                width={63}
                height={60}
                alt=""
                className="absolute right-0 w-[2.7rem] max-w-[4.5rem] -mr-2 lg:w-auto"
              />
            )}
          </div>
        </div>

        <div ref={formRef} className="h-0 overflow-hidden">
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={ContactFormSchema}
          >
            {({ errors, touched }) => {
              return (
                <>
                  <Form>
                    {/* <div className="grid grid-cols-1 gap-6 md:gap-6 py-6 md:grid-cols-2 xl:grid-cols-3 md:py-8 2xl:px-4"> */}
                    <div className="flex flex-col gap-6 md:gap-6 pt-4 pb-0 md:grid-cols-2 xl:grid-cols-3 xl:flex-row md:py-8 xl:gap-12">
                      <div className="flex flex-col gap-[1.25rem] md:gap-[1.063rem] sm:flex-row max-w-[68rem] flex-1">
                        <div className="flex flex-col gap-[1.25rem] flex-1 justify-between">
                          {formFields?.slice(0, 3)?.map((fieldName) => {
                            const typedFieldName =
                              fieldName as keyof typeof fieldTypes;
                            return (
                              <div key={fieldName}>
                                <Field
                                  name={fieldName}
                                  className={`text-dark-purple placeholder-light-purple placeholder:font-area-thin h-[50px] md:h-[4.688rem] w-full border border-light-purple px-4 py-4 bg-transparent focus:outline-none text-base placeholder:text-base md:placeholder:text-[1.875rem] md:text-[1.875rem]`}
                                  placeholder={placeholders[typedFieldName]}
                                />

                                {touched[typedFieldName] &&
                                  errors[typedFieldName] && (
                                    <p className="text-xs mt-2 italic text-dark-purple">
                                      {errors[typedFieldName] as string}
                                    </p>
                                  )}
                              </div>
                            );
                          })}
                        </div>

                        <div className="max-h-[19.688rem] flex-1 ">
                          {formFields?.slice(3, 4)?.map((fieldName) => {
                            const typedFieldName =
                              fieldName as keyof typeof fieldTypes;

                            if (typedFieldName === "message") {
                              return (
                                <>
                                  <Field
                                    key={fieldName}
                                    as="textarea"
                                    name={fieldName}
                                    className={`w-full h-full border border-light-purple px-4 py-4 text-dark-purple placeholder-light-purple placeholder:font-area-thin focus:outline-none bg-transparent resize-none text-base placeholder:text-base md:placeholder:text-[1.875rem] md:text-[1.875rem]`}
                                    placeholder={placeholders[typedFieldName]}
                                    rows={6}
                                  />
                                  {touched.message && errors.message && (
                                    <p className="text-xs mt-1 italic text-dark-purple">
                                      {errors.message as string}
                                    </p>
                                  )}
                                </>
                              );
                            }
                          })}
                        </div>
                      </div>
                      {/* xl:ml-[1.938rem]  */}
                      <div className="flex flex-col justify-between flex-1 xl:max-w-[18.125rem] 2xl:max-w-[31.5rem] gap-5 md:col-span-2 xl:col-span-1">
                        {formFields?.slice(4, 5)?.map((fieldName) => {
                          const typedFieldName =
                            fieldName as keyof typeof fieldTypes;

                          if (typedFieldName === "terms") {
                            return (
                              <>
                                <div className="flex gap-[1.125rem]">
                                  <Field
                                    id={fieldName}
                                    type="checkbox"
                                    name={fieldName}
                                    className=" relative peer shrink-0
                                  appearance-none w-4 h-4 border-2 border-light-purple rounded-sm bg-transparent checked:appearance-auto accent-light-purple mt-1"
                                  />

                                  <div>
                                    <label
                                      htmlFor={fieldName}
                                      className="text-base font-medium text-white"
                                    >
                                      Sie erklären sich damit einverstanden,
                                      dass Ihre Daten zur Bearbeitung Ihres
                                      Anliegens verwendet werden. Weitere
                                      Informationen und Widerrufshinweise finden
                                      Sie in den Datenschutz hinweisen.
                                    </label>

                                    {touched.terms && errors.terms && (
                                      <p className="text-xs italic text-dark-purple mt-2 md:mt-4">
                                        {errors.terms as string}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </>
                            );
                          }
                        })}

                        <>
                          <button
                            type="submit"
                            className={`group mt-7.5 inline-flex items-center gap-4 xl:-ml-[0.438rem]`}
                            disabled={loading}
                          >
                            <Image
                              src={ArrowPurple}
                              width={60}
                              height={52}
                              alt=""
                              className="-rotate-90 w-[1.6rem] 2xl:w-[53.4px]"
                            />
                            <span className="font-area-semibold text-2xl md:text-[2.5rem] tranition-all duration-300 text-light-purple group-hover:pl-2 ">
                              Senden
                            </span>
                            {loading && (
                              <div>
                                <Spinner width="w-7" height="h-7" />
                              </div>
                            )}
                          </button>

                          {showToast && (
                            <div className="text-dark-purple">
                              {toastMessage}
                            </div>
                          )}
                        </>
                      </div>
                    </div>
                  </Form>
                </>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
