import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img
        initial={{ y: -200, opacity: 1, }}
        transition={{duration: 1.2, }}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center'
        src='data:image/png;base64,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
        TkSuQmCC'alt=''/>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of ..</h4>
            <p className='font-bold text-2xl mt-1'>FaisalMS</p>
            <div className='flex space-x-2 my-2'>
                <img
                className='h-10 w-10 rounded-full '
                src='' alt=''/>
                <img
                className='h-10 w-10 rounded-full '
                src='' alt=''/>
                <img
                className='h-10 w-10 rounded-full '
                src='' alt=''/>
                <img
                className='h-10 w-10 rounded-full '
                src='' alt=''/>
            </div>
            <p> Stared Work... - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard