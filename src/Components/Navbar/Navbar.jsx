import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import imgAbbreviation from '/public/generated_ms_image.png'
export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className='z-50 fixed inset-x-0 bg-[#080613] px-4 py-2'>
        <section className='flex justify-between items-center text-white'>
          {/* Left side (Image + Name) */}
          <div className='left flex justify-center items-center gap-2'>
            <img
              src={imgAbbreviation}
              alt='IMG_Abbreviation_of_name'
              className='rounded-[50%] w-16 h-16 cursor-pointer'
            />

            <p
              onClick={() => setEditing(true)}
              className={`font-semibold cursor-pointer ${style.name}`}
            >
              Menna Sayed | Front-End Dev
            </p>
          </div>

          {/* Right side (Links) */}
          <div className='right'>
            {/* Desktop links */}
            <div className='hidden md:flex'>
              <a
                href='#about'
                className='mx-3 font-semibold text-[#7d8493] hover:text-white'
              >
                About
              </a>
              <a
                href='#education'
                className='mx-3 font-semibold text-[#7d8493] hover:text-white'
              >
                Education
              </a>
              <a href='#projects' className='mx-3 font-semibold text-[#7d8493] hover:text-white'>
                Projects
              </a>
              <a href='#contact' className='mx-3 font-semibold text-[#7d8493] hover:text-white'>
                Contact
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className='md:hidden text-white'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <i className='fa-solid fa-x'></i>
              ) : (
                <i className='fa-solid fa-bars'></i>
              )}
            </button>
          </div>
        </section>

        {/* Mobile menu (dropdown) */}
        {isOpen && (
          <div className='md:hidden right-0 absolute flex flex-col items-center gap-3 bg-[#0f0d20] shadow-lg mt-4 py-4 rounded-xl w-1/3 h-[80vh]'>
            <a
              href='#about'
              className='font-semibold text-[#7d8493] hover:text-white'
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href='#education'
              className='font-semibold text-[#7d8493] hover:text-white'
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
            <a href='#projects' className='mx-3 font-semibold text-[#7d8493] hover:text-white'>
              Projects
            </a>
            <a href='#contact'
              className='font-semibold text-[#7d8493] hover:text-white'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
