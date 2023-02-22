"use client";
import { useRef, useState } from "react";
import { styles } from "@/styles";
import emailjs from "@emailjs/browser";
import { useFormik, resetForm } from "formik";
import * as Yup from "yup";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleName= (e) => {
  //   setName(e.target.value);
  // };
  // const handleEmail= (e) => {
  //   setEmail(e.target.value);
  // };
  // const handleMessage= (e) => {
  //   setMessage(e.target.value);
  // };

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_uc9wo26",
  //       "template_i6xxiwi",
  //       form.current,
  //       "wO24vRyimtsLwsozE"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //     setEmail('');
  //     setName('');
  //     setMessage('');
  // };
  return (
    <section
      className={`${styles.paddings} min-h-[100vh] bg-secondary z-[50] `}
      id="contact"
    >
      <div className="flex lg:flex-row-reverse flex-col  z-[10] justify-between items-start ">
        <h1 className={styles.heading_2}>Contact</h1>
        <div className="lg:w-[60%] w-full">
        <ContactForm/>
        </div>
        {/* <form className="flex flex-col w-full text-[16px] items-start max-w-[60%]" ref={form} onSubmit={sendEmail}>
        <label className={`${styles.label_form}`} >Name</label>
        <input className={` ${styles.input_form}`} value={name} onChange={handleName} type="text" name="user_name"  />
        <label className={`${styles.label_form}`}>Email</label>
        <input type="email" name="user_email" className={`h-[44px] ${styles.input_form}`} value={email} onChange={handleEmail} />
        <label className={` ${styles.label_form}`}>Message</label>
        <textarea className={` ${styles.input_form} h-[128px]`}  value={message} onChange={handleMessage} name="message" />
        <input className="cursor-pointer bg-[#BFBFBF] rounded-md" type="submit" value="Send" />
      </form> */}
      </div>
    </section>
  );
};

function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const formik = useFormik({
    initialValues: {
      form_name: "",
      user_email: "",
      message: "",
    },

    validationSchema: Yup.object({
      form_name: Yup.string().required("* Name field is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
    }),
    onSubmit: (values, { resetForm, setSubmitting } ) => {
      console.log("values", values);
      try {
        emailjs
          .send(
            "service_uc9wo26",
            "template_i6xxiwi",
            values,
            "wO24vRyimtsLwsozE"
          )
          .then(() => {
            setSubmit(true);
            setSubmitting(false);
            resetForm();
          });
      } catch {
        setSubmitting(false);
        setSubmit(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label className={`${styles.label_form}`}>Name</label>
      <input
        className={` ${styles.input_form}`}
        id="form_name"
        name="form_name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.form_name}
      />
      <div className={`mb-4 `}
      >
        {formik.errors.form_name}
      </div>

      <label className={`${styles.label_form}`}>Email</label>
      <input
        id="user_email"
        type="email"
        name="user_email"
        className={`h-[44px] ${styles.input_form}`}
        onChange={formik.handleChange}
        value={formik.values.user_email}
      />
      <div
        className={`mb-4 `}
      >
        {formik.errors.user_email}
      </div>

      <label className={`${styles.label_form}`}>Message</label>
      <textarea
        className={` ${styles.input_form} h-[128px] `}
        id="message"
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <div
      >
        {formik.errors.message}
      </div>

     
      <button
        disabled={formik.isSubmitting}
        type="submit"
        className="cursor-pointer bg-primary rounded-md w-full py-3 mt-4"
      >
        <span className="font-poppins text-white upper">Send Message</span>
      </button>
      <div className={`text-green-500 text-sm ${submit ? "" : "hidden"}`}>Message sent! I will get back with you shortly.</div>
    </form>
  );
}

export default Contact;
