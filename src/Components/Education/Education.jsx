import React from 'react'
import style from './Education.module.css'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import HelwanUni from '/Education/HelwanUni.jpg'
import Route from '/Education/Route.png'
import Reendeavor from '/Education/Reendeavor.jpg'
import HorizontalLine from '../HorizontalLine/HorizontalLine'

export default function Education () {
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
      <section className='bg-[#121212] px-12 py-6 about' id='education'>
        <div>
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
            className={`font-semibold mb-8 text-[34px] text-white`}
          >
            Learning experience
          </motion.p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {/* Desktop Layout - Hidden on mobile */}
          <div className='hidden relative lg:flex justify-center'>
            {/* vertical line */}
            <div className='absolute bg-gradient-to-b from-white via-gray-400 to-white w-[2px] h-full'></div>

            <div className='flex flex-col gap-24'>
              {/* Step 1 Helwan  */}
              <div className='items-center gap-6 grid grid-cols-[1fr_auto_1fr]'>
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className='relative bg-[#1d1836] shadow-md p-4 rounded-lg w-full text-white text-right'
                >
                  <div className='top-1/2 left-full absolute border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[#1d1836] border-l-[12px] w-0 h-0 -translate-y-1/2'></div>

                  <h3 className='mb-2 font-bold text-xl text-left'>
                    CS Student Helwan University
                  </h3>

                  <div className='flex flex-col items-start'>
                    <ul className='space-y-2 px-2 text-[#ffffff] text-sm text-left list-disc list-outside'>
                      <li>
                        Worked with various programming languages including C++,
                        Java, and Python.
                      </li>
                      <li>
                        Developed small projects and assignments during
                        coursework.
                      </li>
                      <li>Collaborated with classmates on problem-solving.</li>
                      <li>
                        Built strong foundations in algorithms and data
                        structures.
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* center */}
                <div className='flex justify-center my-4'>
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    src={HelwanUni}
                    alt=''
                    className='z-10 rounded-full w-16 h-16 object-cover'
                  />
                </div>
                {/* right side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className='pl-4'
                >
                  <motion.p className='font-semibold text-[#b8b8b8] text-[17px]'>
                    Oct 2022 – June 2027
                  </motion.p>
                </motion.div>
              </div>
              {/* step 02 Route Academy */}
              <div className='items-center gap-6 grid grid-cols-[1fr_auto_1fr]'>
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className='pl-4'
                >
                  <motion.p className='font-semibold text-[#b8b8b8] text-[17px]'>
                    Feb 2024 – July 2024
                  </motion.p>
                </motion.div>

                {/* center */}
                <div className='flex justify-center my-4'>
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    src={Route}
                    alt=''
                    className='z-10 rounded-full w-16 h-16 object-cover'
                  />
                </div>

                {/* right side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className='relative bg-[#1d1836] shadow-md p-4 rounded-lg w-full text-white text-right'
                >
                  <div className='top-1/2 right-full absolute border-t-[10px] border-t-transparent border-r-[#1d1836] border-r-[12px] border-b-[10px] border-b-transparent w-0 h-0 -translate-y-1/2'></div>

                  <h3 className='mb-2 font-bold text-xl text-left'>
                    Web Development Training (Front-End Completed, Back-End in
                    Progress)
                  </h3>

                  <div className='flex flex-col items-start'>
                    <ul className='space-y-2 px-2 text-[#ffffff] text-sm text-left list-disc list-outside'>
                      <li>
                        Completed a comprehensive Front-End Development course
                        at Route Academy
                      </li>
                      <li>
                        Currently enrolled in the Back-End Development course at
                        Route Academy.
                      </li>
                      <li>
                        Gained practical experience building projects using
                        modern web technologies.
                      </li>
                      <li>
                        Strengthened problem-solving and teamwork skills through
                        real-world assignments.
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* step 03 Volunteer at Reendeavor*/}
              <div className='items-center gap-6 grid grid-cols-[1fr_auto_1fr]'>
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className='relative bg-[#1d1836] shadow-md p-4 rounded-lg w-full text-white text-right'
                >
                  <div className='top-1/2 left-full absolute border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[#1d1836] border-l-[12px] w-0 h-0 -translate-y-1/2'></div>

                  <h3 className='mb-2 font-bold text-xl text-left'>
                    Front-End Developer Volunteer – Reendeavor
                  </h3>

                  <div className='flex flex-col items-start'>
                    <ul className='space-y-2 px-2 text-[#ffffff] text-sm text-left list-disc list-outside'>
                      <li>
                        Volunteered as a Front-End Developer to build
                        Reendeavor's official website.
                      </li>
                      <li>
                        Developed responsive web pages using modern technologies
                        (React, Tailwind CSS).
                      </li>
                      <li>
                        Collaborated with the team to deliver an engaging and
                        user-friendly design.
                      </li>
                      <li>
                        Enhanced my practical skills by working on a real-world
                        project.
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <div className='flex justify-center my-4'>
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    src={Reendeavor}
                    alt=''
                    className='z-10 rounded-full w-16 h-16 object-cover'
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className='pl-4'
                >
                  <motion.p className='font-semibold text-[#b8b8b8] text-[17px]'>
                    joined Sept 2025.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Visible only on mobile */}
          <div className='lg:hidden relative flex w-full'>
            {/* Vertical line - positioned to go through center of images */}
            <div className='left-[23px] absolute bg-gradient-to-b from-white via-gray-400 to-white w-[2px] h-full'></div>
            
            <div className='flex flex-col gap-8 w-full'>
              {/* Item 1 - Helwan University */}
              <div className='flex items-start gap-4'>
                {/* Timeline point and image */}
                <div className='z-10 relative flex-shrink-0'>
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    src={HelwanUni}
                    alt=''
                    className='rounded-full w-12 h-12 object-cover'
                  />
                </div>

                {/* Content card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className='flex-1 bg-[#1d1836] shadow-md p-4 rounded-lg text-white'
                >
                  <p className='mb-2 font-semibold text-[#b8b8b8] text-xs'>
                    Oct 2022 – June 2027
                  </p>
                  <h3 className='mb-2 font-bold text-lg'>
                    CS Student Helwan University
                  </h3>
                  <ul className='space-y-2 text-[#ffffff] text-sm list-disc list-inside'>
                    <li>
                      Worked with various programming languages including C++,
                      Java, and Python.
                    </li>
                    <li>
                      Developed small projects and assignments during
                      coursework.
                    </li>
                    <li>Collaborated with classmates on problem-solving.</li>
                    <li>
                      Built strong foundations in algorithms and data
                      structures.
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Item 2 - Route Academy */}
              <div className='flex items-start gap-4'>
                {/* Timeline point and image */}
                <div className='z-10 relative flex-shrink-0'>
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    src={Route}
                    alt=''
                    className='rounded-full w-12 h-12 object-cover'
                  />
                </div>

                {/* Content card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className='flex-1 bg-[#1d1836] shadow-md p-4 rounded-lg text-white'
                >
                  <p className='mb-2 font-semibold text-[#b8b8b8] text-xs'>
                    Feb 2024 – July 2024
                  </p>
                  <h3 className='mb-2 font-bold text-lg'>
                    Web Development Training (Front-End Completed, Back-End in
                    Progress)
                  </h3>
                  <ul className='space-y-2 text-[#ffffff] text-sm list-disc list-inside'>
                    <li>
                      Completed a comprehensive Front-End Development course
                      at Route Academy
                    </li>
                    <li>
                      Currently enrolled in the Back-End Development course at
                      Route Academy.
                    </li>
                    <li>
                      Gained practical experience building projects using
                      modern web technologies.
                    </li>
                    <li>
                      Strengthened problem-solving and teamwork skills through
                      real-world assignments.
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Item 3 - Reendeavor */}
              <div className='flex items-start gap-4'>
                {/* Timeline point and image */}
                <div className='z-10 relative flex-shrink-0'>
                  <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    src={Reendeavor}
                    alt=''
                    className='rounded-full w-12 h-12 object-cover'
                  />
                </div>

                {/* Content card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='flex-1 bg-[#1d1836] shadow-md p-4 rounded-lg text-white'
                >
                  <p className='mb-2 font-semibold text-[#b8b8b8] text-xs'>
                    joined Sept 2025
                  </p>
                  <h3 className='mb-2 font-bold text-lg'>
                    Front-End Developer Volunteer – Reendeavor
                  </h3>
                  <ul className='space-y-2 text-[#ffffff] text-sm list-disc list-inside'>
                    <li>
                      Volunteered as a Front-End Developer to build
                      Reendeavor's official website.
                    </li>
                    <li>
                      Developed responsive web pages using modern technologies
                      (React, Tailwind CSS).
                    </li>
                    <li>
                      Enhanced my practical skills by working on a real-world
                      project.
                    </li>
                    <li>
                      Collaborated with the team to deliver an engaging and
                      user-friendly design.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

       <HorizontalLine/>
      </section>
    </>
  )
}