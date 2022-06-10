import React, { useState } from "react";
import { BiNavigation } from "react-icons/bi";
import profile from "../assets/images/myimage_ccexpress.png";
import backgroundImage from "../assets/images/backgroundImage.jpg";
import Modal from 'react-modal';
import { useFormik } from "formik";
import * as Yup from 'yup';
import emailjs from "@emailjs/browser"

import resume from "../assets/files/UsmanCV.pdf";
import Typewriter from "typewriter-effect";

import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";



const MainContainer = () => {
  const [visible, setVisible] = useState(false)


  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      message: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Email is Required"),
      phone: Yup.string().required('Phone number is Required'),
      message: Yup.string().min(10, "Minimum 10 Characters").required("Write Some Message")

    }),
    onSubmit: (values, { resetForm }) => {
      const { email, phone, message } = values;

      resetForm({ values: "" });



      const form = {
        email: values.email,
        phone: values.phone,
        message: values.message,
      };
      emailjs
        .send("service_ghfgz7c", "template_d61kyrk", form, "XTwYNfbAOgicRZi9L")
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent")

          },
          (error) => {
            console.log(error.text);
          }
        );




    },
  });

  return (
    <div id="Home" className="h-screen  flex justify-between items-center  ">
      <div className="relative footerClass">
        <img
          src={backgroundImage}
          className="object-cover w-screen min-h-screen leading-snug  opacity-25"
        />
      </div>
      <div className="flex flex-row flex-wrap lg:mt-16 md:mt-40 mt-24 absolute lg:top-0 top-2  justify-between">
        <div className="flex flex-col  lg:w-1/2 relative">
          <span className="flex  text-primaryLight absolute top-1 lg:left-12 left-2  ml-4 lg:ml-24   rotate-[-16deg]  text-2xl">
            Hello!
          </span>
          <div>
            <h1
              className="font-bold  from-neutral-900 lg:text-[5.9rem] lg:px-[10.6rem] mt-10 lg:mt-5 
         px-0 text-5xl lg:text-left text-center"
            >
              MERN STACK
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Designer..")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Developer..")
                    .start();
                }}
              />
            </h1>
          </div>

          <div className="flex mt-5 p-3 lg:ml-24 md:ml-24 ml-2 lg:justify-start justify-center">
            <button
              onClick={() => setVisible(true)}
              className="mr-4 bg-primaryLight lg:p-5 lg:pl-10 p-2 pt-4 pl-4 rounded-lg text-bgsecondaryGray font-bold flex justify-center"
            >
              Lets Talk
              <span className="pt-1 pl-3">
                <BiNavigation />
              </span>
            </button>
            <button className="mr-4 bg-primaryLight lg:p-5 lg:pl-10 p-2 pt-4 pl-4 rounded-lg  text-bgsecondaryGray font-bold flex">
              <a href={resume} download="YourName resume.pdf">
                {" "}
                Download CV{" "}
              </a>

            </button>
          </div>

          <div className="flex lg:mt-0 md:mt-14 mt-0   ml-28 flex-wrap">
            <p className="mt-8 lg:text-lg text-md lg:text-left text-center font-semibold">
              Check Out My
            </p>
            <div className="flex justify-center content-center mt-4 lg:mt-0 md:mt-4 md:ml-6 ml-0 gap-5">
              <button
                className="rounded-full flex lg:text-3xl justify-center hover:bg-primary p-5 lg:p-7 
               duration-500 text-secondary bg-bgsecondaryGray"
              >
                <a href="https://github.com/usman385">
                  <BsGithub />
                </a>
              </button>
              <a href="https://www.linkedin.com/in/usman-khan-463b20113">
                <button
                  className="rounded-full flex lg:text-3xlduration-500 hover:bg-primary  justify-center 
                 p-5 lg:p-7 bg-bgsecondaryGray"
                >
                  <BsLinkedin />
                </button>
              </a>
              <button
                className="rounded-full flex lg:text-3xl justify-center hover:bg-primary p-5 lg:p-7
               duration-500 bg-bgsecondaryGray"
              >
                <BsFacebook />
              </button>
            </div>
          </div>
        </div>

        {/*--------Image area start from here */}
        <div className="flex lg:flex-row border-8 animate-spin 2s linear; divbackgroundcolor rounded-full mt-3 lg:w-1/2">
          <img
            src={profile}
            alt="image"
            className="object-cover containerimage animate-pulse 10s linear lg:mt-0 md:mt-14 mt-3 lg:mb-32 mb-0 rounded-full  "
          />
        </div>
      </div>

      <Modal isOpen={visible}>
        <div className="w-full h-full flex justify-center items-center ">
          <div className="flex bg-slate-300 lg:w-1/2 w-full h-4/5 p-8 justify-center items-center rounded-lg">
            <form onSubmit={formik.handleSubmit} class="  w-4/5 h-full flex flex-col justify-center items-center">
              <div className="flex flex-col w-full ">
                <label >Email</label>
                <input type="email" name="email" onChange={formik.handleChange}
                  value={formik.values.email} placeholder="Enter Name"

                  className="p-3 w-full rounded-xl shadow-2xl outline-0" />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}

              </div>
              <div className="flex flex-col w-full mt-3">
                <label>Phone</label>
                <input type="number" name="phone" onChange={formik.handleChange}
                  value={formik.values.phone} placeholder="Enter Phone" className="p-3 w-full rounded-xl shadow-xl outline-0" />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500">{formik.errors.phone}</div>
                ) : null}
              </div>

              <div className="flex flex-col h-full w-full mt-3">
                <label>Message</label>
                <textarea type="text" name="message" onChange={formik.handleChange}
                  value={formik.values.message} placeholder="Enter Message" className="p-4 h-full w-full rounded-xl shadow-xl outline-0" />
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500">{formik.errors.message}</div>
                ) : null}
              </div>

              <div className="flex justify-end w-full mt-5">
                <button onClick={() => setVisible(false)} type="submit" className="p-3 px-6  rounded-lg bg-red-600 mr-4 text-white" >Cancel</button>
                <button type="submit" className="p-3 px-8 rounded-lg bg-blue-600 text-white" >Send</button>
              </div>

            </form>



          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MainContainer;
