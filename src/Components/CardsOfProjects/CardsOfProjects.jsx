import React from 'react'
import style from './CardsOfProjects.module.css'
import { motion } from 'framer-motion'
import shopletImg from '/Projects/ShopletProject.png'
import Taqwa from '/Projects/Taqwa_Islam.png'
import movieVibe from '/Projects/MovieVibe.png'
import weatherImg from '/Projects/weather-web.png'
import coffe from '/Projects/Coffee.png'
import restar from '/Projects/Restar.png'
import games from '/Projects/Games.png'
import horsy from '/Projects/Horsy_Club.png'
import movieapp from '/Projects/MovieApp.png'

export default function CardsOfProjects () {
  const fadeInCards = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeIn' }
    }
  }

  const cards = [
    {
      id: 1,
      title: 'Shoplet Web',
      img: shopletImg,
      desc: 'Shoplet is a modern e-commerce web application built with React and Vite, designed to give users a seamless shopping experience. The platform allows browsing through a variety of products, viewing detailed descriptions and images, and adding items to the wishlist for later. With its clean, responsive UI and smooth navigation, Shoplet makes online shopping intuitive and enjoyable, while showcasing the practical integration of APIs, hooks, and advanced front-end techniques.',
      tech: ['#React', '#Tailwind', '#Hooks', '#API'],
      github: 'https://github.com/MennaSayed46/Shoplet',
      live: 'https://shoplet-ruby.vercel.app/'
    },
    {
      id: 2,
      title: 'Taqwa Islam',
      img: Taqwa,
      desc: 'Taqwa Islam is a spiritual website created to help users explore the Holy Quran and Hadiths of Prophet Muhammad (PBUH) in a simple and accessible way. It provides easy navigation between verses and Hadiths, and includes the ability to translate content into Indonesian, making it accessible to a wider audience. The design is user-friendly and focuses on clarity, enabling readers to enjoy a smooth and meaningful learning experience with Islamic teachings.',
      tech: ['#React', '#Tailwind', '#Hooks', '#APIs'],
      github: 'https://github.com/MennaSayed46/Taqwa_Islam',
      live: 'https://taqwa-islam.vercel.app/'
    },
    {
      id: 3,
      title: 'MovieVibe Web',
      img: movieVibe,
      desc: 'MovieVibe is a web app that helps movie enthusiasts discover trending, new, and popular films effortlessly. Users can explore detailed movie summaries, reviews, cast information, and ratings, all within a clean and organized interface. The platform is designed with simplicity in mind, ensuring smooth navigation and quick access to what users are looking for, making it an ideal place to find your next watch and stay updated with the entertainment world.',
      tech: ['#React', '#Tailwind', '#Hooks', '#APIs'],
      github: 'https://github.com/MennaSayed46/MovieVibe',
      live: 'https://movie-vibe.vercel.app/'
    },
    {
      id: 4,
      title: 'Weather Web',
      img: weatherImg,
      desc: 'Weather Web is a practical website that delivers accurate 3-day forecasts for any location around the world. It’s designed for anyone who wants to plan their trips, organize daily routines, or simply stay informed about changing weather conditions. With a straightforward layout and responsive design, the app makes it easy to check temperatures, conditions, and updates instantly, ensuring that users are always prepared for the days ahead.',
      tech: ['#HTML', '#CSS', '#JS', '#Bootstrap', '#API'],
      github: 'https://github.com/MennaSayed46/weather-app',
      live: 'https://github.com/MennaSayed46/weather-app'
    },
    {
      id: 5,
      title: 'Coffee Web',
      img: coffe,
      desc: 'Coffee Web is a stylish and modern website dedicated to coffee lovers, designed as a practice project for mastering React Router DOM. The site showcases smooth sliders, elegant transitions, and engaging animations created with Framer Motion. The overall design creates a cozy and enjoyable browsing experience, making it more than just a practice project — it feels like a real, vibrant coffee shop website.',
      tech: ['#React', '#Tailwind', '#API'],
      github: 'https://github.com/MennaSayed46/Coffee-website',
      live: 'https://coffee-website-rosy.vercel.app/'
    },
    {
      id: 6,
      title: 'Restaurant Web',
      img: restar,
      desc: 'Restaurant Web is a modern app built with React, offering a simple and user-friendly way to browse a restaurant’s menu. The platform highlights a variety of delicious meals with a clean design that focuses on clarity and accessibility. Its responsive layout ensures smooth navigation across devices, making it an excellent example of building real-world restaurant templates for food businesses.',
      tech: ['#React', '#Tailwind', '#Hooks'],
      github: 'https://github.com/MennaSayed46/Restaurant',
      live: 'https://restaurant-gules.vercel.app'
    },
    {
      id: 7,
      title: 'Games Web',
      img: games,
      desc: 'Games Web is an engaging platform designed to explore and review free-to-play games across various genres. Users can discover new games, view descriptions, and navigate through a clear and simple interface that focuses on accessibility. Built with vanilla technologies, this project highlights the core front-end fundamentals while providing an enjoyable experience for gamers seeking something new to play.',
      tech: ['#HTML', '#CSS', '#JS', '#Boostrap', 'API'],
      github: 'https://github.com/MennaSayed46/Games-App',
      live: 'https://mennasayed46.github.io/Games-App/'
    },
    {
      id: 8,
      title: 'Horsy Club Web',
      img: horsy,
      desc: 'Horsy Club is a creative website designed for horse lovers, offering a strong template for building a future community or club environment. While the current version does not include API integration, it sets the foundation for customization and feature expansion. Its elegant layout and clean interface make it easy to navigate, providing flexibility for future development into a more advanced web application.',
      tech: ['#React', '#Tailwind', '#Hooks'],
      github: 'https://github.com/MennaSayed46/HorsyClubb',
      live: 'https://horsy-clubb.vercel.app/'
    },
    {
      id: 9,
      title: 'Movie Application',
      img: movieapp,
      desc: 'Movie Application is a beginner-friendly project built with HTML, CSS, JavaScript, and Bootstrap. It allows users to browse through movies, explore details, and enjoy a responsive, simple layout. This project focuses on practicing the core front-end skills while providing users with a functional, easy-to-use app that introduces the concept of handling APIs for real data integration in the future.',
      tech: ['#HTML', '#CSS', '#JS', '#Bootstrap', '#Api'],
      github: 'https://github.com/MennaSayed46/Movie-application',
      live: 'https://mennasayed46.github.io/Movie-application/'
    }
  ]

  return (
    <>
      <div className='relative flex flex-col items-center gap-10 py-10 w-full min-h-[300vh]'>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={fadeInCards}
            initial='hidden'
            whileInView='visible'
            className={`sticky flex flex-col min-h-[300px] md:h-full items-start md:w-1/2 w-full bg-[#1d1836] p-5 rounded-xl border-r-2 border-t-2 border-b-2 border-white shadow-lg text-white ${style.card}`}
            style={{
              top: `${index * 40 + 60}px`,
              zIndex: index + 1
            }}
          >
            <p className='my-2 font-semibold text-lg md:text-xl text-center'>
              {card.title}
            </p>

            <div className='flex md:flex-row flex-col gap-2'>
              <div className='left w-full'>
                <p className='font-medium text-[#b7bec6] text-sm'>
                  {card.desc}
                </p>

                {/* technologies */}
                <div className='bottom-2 absolute flex flex-row items-center gap-2 md:my-1'>
                  {card.tech.map((t, i) => (
                    <p key={i} className='text-[#07b6d5]'>
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              <div className='right w-full'>
                <img
                  src={card.img}
                  alt={card.title}
                  className='md:my-0 mb-3 py-2 rounded-md w-full md:h-3/4 object-cover'
                  loading='lazy'
                />
              </div>
            </div>

            {/* previews */}
            <div className='top-2 right-2 absolute flex flex-row gap-2 previews'>
              <a
                target='_blank'
                href={card.github}
                className='hover:cursor-pointer'
              >
                <div className='bg-black p-2 rounded-full'>
                  <i className='fa-brands fa-github'></i>
                </div>
              </a>
              <a
                target='_blank'
                href={card.live}
                className='hover:cursor-pointer'
              >
                <div className='bg-black p-2 rounded-full'>
                  <i className='bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent fa-solid fa-eye'></i>
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}
