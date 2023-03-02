"use client";
import { useState } from "react";
import { styles } from "@/styles";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { slideLeft, slideRight, staggerContainer } from "@/utils/motion";
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
      className={`${styles.paddings} min-h-[100vh] z-[50] `}
      id="contact"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex lg:flex-row-reverse flex-col-reverse  z-[10] justify-between items-start "
      >
        <motion.div variants={slideLeft(0.25)}  className="lg:w-[60%] w-full mt-6 border-[1px] pb-10 pt-5 px-6  rounded-xl">
          <ContactForm />
        </motion.div>
        <motion.div variants={slideRight(0)} className="flex flex-col lg:justify-start justify-center lg:items-start items-center max-lg:w-full">
          <h1 className={styles.heading_2}>Contact</h1>
          <h3>
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
      form_name: Yup.string().required("*Name field is required"),
      user_email: Yup.string()
        .email("*Invalid email address")
        .required("*Email field is required"),
      message: Yup.string().required("*Message field is required"),
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
        className={` ${styles.new_input}`}
        id="form_name"
        name="form_name"
        type="text"
        placeholder="Name"
        onChange={formik.handleChange}
        autoComplete="off"
        value={formik.values.form_name}
      />
      <div className={`mb-4 mt-1`}>{formik.errors.form_name}</div>

      <input
        id="user_email"
        type="email"
        name="user_email"
        className={`${styles.new_input}`}
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.user_email}
      />
      <div className={`mb-4 mt-1 `}>{formik.errors.user_email}</div>

      <textarea
        className={` ${styles.new_input} h-[128px] `}
        id="message"
        name="message"
        placeholder="Message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <div>{formik.errors.message}</div>

      <button
        disabled={formik.isSubmitting}
        type="submit"
        className="cursor-pointer border-2 border-white bg-primary rounded-md w-full py-3 mt-4"
      >
        <span className="font-poppins text-white upper">Send Message</span>
      </button>
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
