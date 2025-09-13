import React from 'react'
import style from './About.module.css'
import codingImg from '/Front-End Skills/Web-Coding.png'
import Responsive from '/Front-End Skills/Responsive.png'
import AlgoImg from '/Front-End Skills/algorithmsAndStructures.png'
import reactImg from '/Skills/react.svg'
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform
} from 'framer-motion'
import HorizontalLine from '../HorizontalLine/HorizontalLine'

export default function About () {
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', val => {
    console.log(val)
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeOut' }
    }
  }
  const fadeInCards = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeIn' }
    }
  }
  const fadeInDesc = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: 'easeOut' }
    }
  }

  return (
    <>
      <section className='bg-[#121212] px-12 py-3 About' id='about'>
        <div className='flex flex-col px-12 md:w-1/3 text-white md1'>
          <motion.p
            className={`text-[#898989] my-1 font-semibold text-[18px]`}
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
          >
            INTRODUCTION
          </motion.p>
          <motion.p
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            className={`font-semibold mb-2 text-[34px]`}
          >
            Overview
          </motion.p>
          <motion.p
            variants={fadeInDesc}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
          >
            I'm a passionate front-end developer with a strong foundation in web
            fundamentals and a growing interest in back-end development. I'm
            currently expanding my skills through continuous learning and
            hands-on practice. As a motivated self-learner, I enjoy turning
            ideas into user-friendly and efficient solutions while building my
            journey toward becoming a full-stack developer.
          </motion.p>
        </div>

        {/* cards */}
        <motion.div
          className={`flex md:flex-row flex-col justify-center items-center gap-4 mx-auto my-6 px-12 cards ${style.cardWrapper}`}
          variants={fadeInCards}
          initial='hidden'
          whileInView='visible'
        >
          {/* .card01 */}
          <div
            className={`flex flex-col w-full justify-center items-center h-[220px]  card01 ${style.cardsBg} py-12 px-6 rounded-2xl ${style.card}`}
          >
            <img
              src={codingImg}
              alt='Image of coding'
              className='w-[100px] object-fit-cover'
            />
            <p className='my-4 text-[16px] text-white'>Web Developer</p>
          </div>

          {/* .card02 */}
          <div
            className={`flex flex-col w-full justify-center items-center h-[220px]  card02 ${style.cardsBg} py-12 px-6 rounded-2xl ${style.card}`}
          >
            <img
              src={reactImg}
              alt='Image of React.js'
              className='w-[100px] object-fit-cover'
            />
            <p className='my-4 text-[16px] text-white'>React</p>
          </div>
          {/* .card03 */}
          <div
            className={`flex flex-col w-full justify-center items-center h-[220px]  card03 ${style.cardsBg} py-12 px-6 rounded-2xl ${style.card}`}
          >
            <img
              src={Responsive}
              alt='Image of Responsive'
              className='w-[100px] object-fit-cover'
            />
            <p className='my-4 text-[16px] text-white'>Responsive Designs</p>
          </div>
          {/* .card02 */}
          <div
            className={`flex flex-col w-full justify-center items-center h-[220px]  card02 ${style.cardsBg} py-12 px-6 rounded-2xl ${style.card}`}
          >
            <img
              src={AlgoImg}
              alt='Image of algorithms and structures'
              className='w-[100px] object-fit-cover'
            />
            <p className='my-4 text-[16px] text-white'>Algorithms & DS</p>
          </div>
        </motion.div>

        {/* horizontal line */}
       <HorizontalLine/>
      </section>
    </>
  )
}
