import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from "framer-motion";


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The name's Faisal AL Sofyani",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
    <div className='h-screen flex flex-col space-y-8 item-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircles />

        <motion.img
        initial={{x: 200, opacity: 0,}}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="Faisal_picture.JPG"/>
        <motion.div
        initial={{x: -200, opacity: 0,}}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
            <h1 className='text-4xl lg:text-4xl font-semibold px-10'>
                <span className='mr-3'> {text} </span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
        </motion.div>
    <motion.div
    initial={{x: -200, opacity: 0,}}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className='pt-5'>
        <Link href='#about'>
        <button className='heroButton'>About</button>
        </Link>
        <Link href='#experience'>
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href='#skills'>
        <button className='heroButton'>Skills</button>
        </Link>
    </motion.div>
</div>
    )
}
