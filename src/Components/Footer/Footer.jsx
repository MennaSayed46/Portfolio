import React from 'react'
import style from './Footer.module.css'
export default function Footer () {
  return (
    <>
      <footer className={`p-2 text-white text-center ${style['line-gradient']} bg-gradient-to-r from-[#1e0b3a] via-[#2d0f40] to-[#000000ee]`}>
        <div className='flex flex-row justify-center items-center'>
          <p className='border-white border-r-2'>
            <i class='mx-1 text-2xl fa-solid fa-copyright'></i>
          </p>
          <a href='mailto:mennaabdelateef910@gmail.com'>
            <i class='mx-1 text-2xl fa-regular fa-envelope'></i>
          </a>
          <a href='https://github.com/MennaSayed46'>
            <i class='mx-1 text-2xl fa-brands fa-github'></i>
          </a>
          <a href='https://www.linkedin.com/in/menna-abdelateef-04a0a42b2/'>
            <i class='mx-1 text-2xl fa-brands fa-linkedin-in'></i>
          </a>
        </div>
      </footer>
    </>
  )
}
