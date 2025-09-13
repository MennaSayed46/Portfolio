import React from 'react'
import style from './Skills.module.css'
import { motion } from 'framer-motion'
import HTML from '/Skills/htmljpg.jpg'
import CSS from '/Skills/css.png'
import JS from '/Skills/JS.png'
import bootstrap from '/Skills/bootstrap.png'
import jQuery from '/Skills/Jquery.png'
import tailwind from '/Skills/tailwind.png'
import react from '/Skills/react.svg'
import nextJs from '/Skills/nextJs.png'
import TS from '/Skills/TS.png'
import FramerMotion from '/Skills/framer-motion.webp'
import EmailJs from '/Skills/emailJs.png'
import MUI from '/Skills/Mui.png'
import Sql from '/Skills/SQL.png'
import git from '/Skills/Git.png'
import github from '/Skills/github.png'

export default function Skills () {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeOut' }
    }
  }
  const card = [
    { id: 1, name: 'HTML', src: HTML },
    { id: 2, name: 'CSS', src: CSS },
    { id: 3, name: 'JS', src: JS },
    { id: 4, name: 'Bootstrap', src: bootstrap },
    { id: 5, name: 'JQuery', src: jQuery },
    { id: 6, name: 'Tailwind', src: tailwind },
    { id: 7, name: 'React', src: react },
    { id: 8, name: 'NextJs', src: nextJs },
    { id: 9, name: 'TS', src: TS },
    { id: 10, name: 'MUI', src: MUI },
    { id: 11, name: 'Framer Motion', src: FramerMotion },
    { id: 12, name: 'EmailJs', src: EmailJs },
    { id: 13, name: 'SQL', src: Sql },
    { id: 14, name: 'Git', src: git },
    { id: 15, name: 'Github', src: github }
  ]

  return (
    <section className='bg-[#121212] px-12 py-6 overflow-hidden text-white'>
     <motion.p
            className={`text-[#898989] my-1 font-semibold text-[18px]`}
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
          >
            Expertise
          </motion.p>
          <motion.p
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.3 }}
            className={`font-semibold mb-8 text-[34px] text-white`}
          >
            My  Skills
          </motion.p>
      <motion.div
        className='flex gap-10'
        animate={{ x: ['0%', '-200%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20
        }}
      >
        {[...card, ...card].map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center min-w-[120px] hover:scale-110 transition-transform duration-300'
          >
            <img
              src={item.src}
              alt={item.name}
              className='w-16 h-16 object-contain'
            />
            <p className='mt-2 text-sm'>{item.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
