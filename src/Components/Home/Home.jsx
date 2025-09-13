import React from 'react'
import style from './Home.module.css'
import darkBackground from '../../assets/BackgroundHome.jpg'
import { motion } from 'framer-motion'
import ComputersCanvas from '../Canvas/Computers'
import About from '../About/About'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

export default function Home () {
  return (
    <>
      <section
        className={` min-h-screen `}
        style={{
          backgroundImage: `url(${darkBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='flex items-start mx-auto px-12 pt-24'>
          {/* Column */}
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-purple-600 rounded-full w-[20px] h-[20px]' />
            <div className={`${style['line-gradient']} w-[2px] h-[150px] `} />
          </div>
          {/* Name && what i do */}
          <div className='mx-5 text-white'>
            <h1 className='font-black text-[27px] sm:text-[35px] md:text-[45px] lg:text-[60px]'>
              Hi, I'm <span className='text-purple-500'>Menna</span>
            </h1>
            <p className={`font-medium ${style.Job} text-[17px] md:w-1/2`}>
              I’m a Front-End Developer specializing in building modern,
              responsive web interfaces, and currently expanding my skills in
              Back-End development to become a Full-Stack Developer.
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center h-[400px]'>
          <ComputersCanvas />
        </div>

        <div className='bottom-5 absolute flex justify-center w-full'>
          <a href='#about'>
            <div className='flex justify-center items-start border-2 rounded-3xl w-[25px] h-[50px]'>
              <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='bg-fuchsia-700 rounded-xl w-[10px] h-[10px]'
              />
            </div>
          </a>
        </div>
      </section>

      <About/>
      <Education/>
      <Projects/>
            <Skills/>

      <Contact/>
    </>
  )
}
