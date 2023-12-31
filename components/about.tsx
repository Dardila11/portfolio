'use client'
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionHeading from "./section-heading";

export default function About() {

  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      setActiveSection("About")
    }
  }, [inView, setActiveSection])



  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      <SectionHeading> about me </SectionHeading>
      <p>
        Hello! I&apos;m Daniel, a passionate software engineer with a focus on <span className="font-medium">iOS.</span>{" "}
        I love creating cross-platform experiences using <span className="font-medium">Flutter</span>  and
        diving into web development with <span className="font-medium">React and Next.js.</span>{" "}

        Let&apos;s build something amazing together!
      </p>
    </motion.section>
  )
}
