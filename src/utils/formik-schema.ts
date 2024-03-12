import * as Yup from "yup";

export const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Es sind nur Zeichen erlaubt")
    .min(3, "Der Vorname sollte mindestens 3 Zeichen lang sein.")
    .max(20, "Der Vorname darf höchstens 20 Zeichen lang sein.")
    .required("Bitte geben Sie Ihren Vornamen ein"),

  lastName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Es sind nur Zeichen erlaubt")
    .min(3, "Der Nachname sollte mindestens 3 Zeichen lang sein.")
    .max(20, "Der Nachname sollte höchstens 20 Zeichen lang sein.")
    .required("Bitte geben Sie ihren Nachnamen ein"),

  email: Yup.string()
    .matches(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, "Ungültige E-Mail-Adresse")
    .required("Geben Sie bitte Ihre Email-Adresse ein"),

  message: Yup.string()
    .required("Bitte gib deine Nachricht ein")
    .min(10, "Die Nachricht sollte mindestens 10 Zeichen lang sein")
    .max(200, "Die Nachricht sollte höchstens 200 Zeichen lang sein."),

  terms: Yup.boolean()
    .oneOf([true], "Sie müssen den Allgemeinen Geschäftsbedingungen zustimmen")
    .required("Sie müssen den Allgemeinen Geschäftsbedingungen zustimmen"),
});
