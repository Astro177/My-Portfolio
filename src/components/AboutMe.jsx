/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { fadein } from "../hooks/fadein";
import { Link } from "react-scroll";
import {
  MdEmail,
  MdFacebook,
  MdWhatsapp,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";

const AboutMe = () => {
  return (
    <div id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12 lg:flex-row-reverse lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadein("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[550px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadein("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="font-semibold text-color text-5xl">About Me</h2>
            <h3 className="h3 mb-4 mt-4">
              I'm <span className="text-color">Mahabub Ahmed</span> a MERN Stack
              web developer, loves to create attractive websites with
              user-friendly experiences.
            </h3>
            <p className="mb-4">
              I possess extensive experience in crafting responsive websites
              that seamlessly adapt to various devices. My skill set includes
              the ability to hand-code clean, semantic, cross-browser
              compatible, and reusable code, prioritizing maintainability and
              ease of understanding. My primary areas of expertise encompass
              HTML, CSS, Bootstrap, JavaScript, and React. Furthermore, I
              possess intermediate-level proficiency in Next.js, Node.js,
              Express.js, and MongoDB. Should you seek a full-stack developer to
              join your team, I offer a compelling solution. I am eager to
              demonstrate how my experience and competencies align with your
              requirements. You may reach out to me directly via email or use
              the following contact information
            </p>
            <div className="font-semibold">
              <div className="flex gap-2 items-center">
                <MdFacebook /> Mahabub Ahmed
              </div>
              <div className="flex gap-2 items-center">
                <MdWhatsapp /> +8801704031181
              </div>
              <div className="flex gap-2 items-center">
                <MdEmail /> mahabub.ahmed175@gmail.com
              </div>
            </div>

            <Link to="home" smooth={true}>
              <button className="btn-main mt-2 flex items-center gap-1">
                Connect With Me
                <MdOutlineConnectWithoutContact className="hover:animate-bounce" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
