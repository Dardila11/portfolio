'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
  return (
    <section className='mb-28 max-x-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image src="https://avatars.githubusercontent.com/u/14355753?v=4"
              alt='Daniel Profile Image'
              width="200" height="200" quality="95" priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem]
            border-white shadow-xl'/>
          </motion.div>
          <motion.span className='absolute text-4xl bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.1, stiffness: 125 }}

          >👋</motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]
      sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Daniel.</span> I'm a  <span className='font-bold'>Software engineer</span> with
        {" "}<span className='font-bold'>2 years</span> of experience.
        My passion is building <span className='italic underline'>mobile and web apps</span> to all users!
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center 
        gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className='bg-gray-900 text-white px-7 py-3 
          flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition'>
          Contact me here <BsArrowRight className='opacity-70' />
        </Link>

        <a
          className='bg-white px-7 py-3 
          flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer' href='/resume.pdf' download
        >Download Resume <HiDownload className='opacity-70' />
        </a>

        <a className='bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer'
          href='https://www.linkedin.com/in/danieleardila/'
          target='_blank'>
          <BsLinkedin />
        </a>

        <a className='bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer'
          href='https://github.com/Dardila11'
          target='_blank'>
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
