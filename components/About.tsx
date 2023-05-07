import React from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import logo from "/images/Faisal_picture.jpg";
type Props = {};

export default function About({}: Props) {
  const [text] = useTypewriter({
    words: ["<About />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20-px] text-gray-500 text-2xl">
        {text}
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="fis.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
      md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <motion.h4
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold"
        >
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </motion.h4>
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </motion.p>
      </div>
    </motion.div>
  );
}
