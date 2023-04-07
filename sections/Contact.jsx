"use client";
import { useState } from "react";
import { styles } from "@/styles";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

import { slideLeft, slideRight, staggerContainer } from "@/utils/motion";
import {Button } from "@material-tailwind/react";

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
      className={`${styles.paddings}  z-[50] `}
      id="contact"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex lg:flex-row-reverse flex-col-reverse  z-[10] justify-between items-start "
      >
        <motion.div variants={slideLeft(0.25)}  className="lg:w-[60%] w-full max-lg:mt-6 max-lg:border-[1px] max-lg:pb-10 pt-5 px-6  rounded-xl">
          <ContactForm />
        </motion.div>
        <motion.div variants={slideRight(0)} className="flex flex-col lg:justify-start justify-center  px-6 lg:items-start items-center lg:max-w-[50%] w-full">
          <h1 className={styles.heading_2}>Contact</h1>
          <h3 className="lg:text-[18px] text-[16px]">
            Have a question or want to say hello? Feel free to send me a
            message!
          </h3>
        </motion.div>

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
<label className={`${styles.label_form} inputfield__label`}>Name</label>
      <input
        className={`${styles.input_form}}`}
        id="form_name"
        name="form_name"
        type="text"

        onChange={formik.handleChange}
        autoComplete="off"
        value={formik.values.form_name}
      />
      <div className={`mb-4 mt-1 lg:text-[16px] text-[14px]`}>{formik.errors.form_name}</div>
      <label className={`${styles.label_form} inputfield__label`}>Email</label>
      <input
        id="user_email"
        type="email"
        name="user_email"
        className={`${styles.input_form}`}
        
        onChange={formik.handleChange}
        value={formik.values.user_email}
      />
      <div className={`mb-4 mt-1  lg:text-[16px] text-[14px]`}>{formik.errors.user_email}</div>
      <label className={`${styles.label_form}`}>Message</label>
      <textarea
        className={` ${styles.input_form} h-[128px] `}
        id="message"
        name="message"

        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <div className="lg:text-[16px] text-[14px]">{formik.errors.message}</div>

      <Button
        disabled={formik.isSubmitting}
        type="submit"
        className="w-full mt-3 rounded-lg py-3 px-6  text-white transition-all hover:bg-primary/10 active:bg-primary/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-dark="true"
      >
        <span className="font-poppins text-[14px] text-white font-semibold ">Send Message</span>
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
