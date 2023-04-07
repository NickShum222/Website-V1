"use client";
import { useState } from "react";
import { styles } from "@/styles";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

import { slideLeft, slideRight, staggerContainer } from "@/utils/motion";
import { Button } from "@material-tailwind/react";

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
    <section className={`${styles.paddings}  z-[50] `} id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col  z-[10] justify-between items-start "
      >
          <motion.div
            variants={slideRight(0)}
            className="flex lg:w-[35%] w-full gap-5 flex-row justify-start items-center"
          >
            <h1
              className={`${styles.heading_2} transition-all duration-75 mb-2 md:mb-4`}
            >
              <span className="text-highlight">#</span>contact
            </h1>
            <div className="h-[1px] w-full border-[1px] border-highlight mb-2 md:mb-4" />
          </motion.div>
          <div className="flex lg:flex-row flex-col justify-between items-start w-full">
          <h3 className="lg:text-[18px] text-[16px] text-[#9c9c9c] w-full lg:w-[40%]">
            Have a question or want to say hello? Feel free to send me a
            message!
          </h3>
          <motion.div
          variants={slideLeft(0.25)}
          className="lg:w-[50%] w-full max-lg:mt-6  max-lg:pb-10 pt-5 "
        >
          <ContactForm />
        </motion.div>
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
      </motion.div>
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
      form_name: Yup.string().required("Name is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
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
      <input
        className={`${styles.input_form}}`}
        id="form_name"
        name="form_name"
        type="text"
        placeholder="Name"
        onChange={formik.handleChange}
        autoComplete="off"
        value={formik.values.form_name}
      />
      <div className={`mb-4 mt-1 lg:text-[16px] text-[14px] text-[#A31621]`}>
        {formik.errors.form_name}
      </div>

      <input
        id="user_email"
        type="email"
        name="user_email"
        className={`${styles.input_form}`}
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.user_email}
      />
      <div className={`mb-4 mt-1  lg:text-[16px] text-[14px] text-[#A31621]`}>
        {formik.errors.user_email}
      </div>

      <textarea
        className={` ${styles.input_form} h-[128px] `}
        id="message"
        name="message"
        placeholder="Message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <div className="lg:text-[16px] text-[14px] text-[#A31621] pb-3">
        {formik.errors.message}
      </div>

      <Button
        disabled={formik.isSubmitting}
        type="submit"
        className="rounded-none normal-case p-3 text-[14px] md:text-[16px] lg:text-[18px]   text-highlight transition-all hover:bg-highlight/10 active:bg-highlight/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-highlight border-[1px]"
        data-ripple-dark="true"
      >
        <span className=" text-[14px] text-highlight">Send Message</span>
      </Button>
      <div
        className={`text-green-500 text-[16px] pt-3 mb-0 pb-0 ${
          submit ? "" : "hidden"
        }`}
      >
        Message sent! I will get back with you shortly.
      </div>
    </form>
  );
}

export default Contact;
