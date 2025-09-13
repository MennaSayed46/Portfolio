import React from 'react'
import style from './Projects.module.css'
import { motion } from 'framer-motion'
import HorizontalLine from '../HorizontalLine/HorizontalLine'

import { Link } from 'react-router-dom'
import CardsOfProjects from '../CardsOfProjects/CardsOfProjects'
export default function Projects () {
  const fadeInDesc = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: 'easeOut' }
    }
  }
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeOut' }
    }
  }

  return (
    <>
      <section  className='bg-[#121212] px-12 py-3 Projects' id='projects'>
        <div className='flex flex-col md:w-1/3 text-white md1'>
          <motion.p
            className={`text-[#898989] my-1 font-semibold text-[18px]`}
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
          >
            My work
          </motion.p>
          <motion.p
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            className={`font-semibold mb-2 text-[34px]`}
          >
            Projects
          </motion.p>
          <motion.p
            variants={fadeInDesc}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
          >
            These projects highlight my skills and experience, featuring a mix
            of course work and personal initiatives. Each includes a short
            description with links to the source code and live demo, showcasing
            my problem-solving, adaptability, and project management abilities.
          </motion.p>
        </div>

        <CardsOfProjects />

        {/* horizontal line */}
        <HorizontalLine />
      </section>
    </>
  )
}
