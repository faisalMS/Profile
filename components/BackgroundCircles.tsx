import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1, 2, 2, 3, 1],
      opacity: [0.6, 0.7, 0.8, 0.9, 1, 1.5],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    }}
    transition={{
      duration: 2.5,
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#bf0000] rounded-full h-[200px] w-[200px] 
        mt-52 animate-ping'/>
        <div className='rounded-full border border-[#bf0000] h-[300px] w-[300px] absolute 
        mt-52 animate-pulse'/>
        <div className='rounded-full border border-[#0c3290] h-[500px] w-[500px] absolute 
        mt-52 animate-ping'/>
        <div className='rounded-full border border-[#0c3290] opacity-20 h-[650px] w-[650px] 
        absolute mt-52 animate-pulse'/>
        <div className='rounded-full border border-[#bf0000] h-[800px] w-[800px]
        absolute mt-52 animate-ping'/>
    </motion.div>
  )
}

export default BackgroundCircles