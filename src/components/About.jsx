import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function About() {

  const [ref, inView] = useInView({
    triggerOnce: true,   // animation triggers only once
    threshold: 0.1,       // trigger when 10% of the component is visible
  });
  return (
    <div className='min-h-screen w-full pt-16 bg-gradient-to-r from-gray-900 to-amber-950'>
      <div className='max-w-4xl mx-auto p-4 sm:p-6'>
        <motion.h1 
        ref={ref}
          className='text-3xl sm:text-4xl font-bold text-white mb-4'
          initial={{ opacity: 0, y: -50 }}
          animate={ inView?{ opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        <motion.p 
        ref={ref}
          className='text-base sm:text-lg text-gray-300 mb-6'
          initial={{ opacity: 0, y: 50 }}
          animate={inView?{ opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am a passionate web developer with a love for creating dynamic and responsive web applications. My journey in web development started with a curiosity to understand how websites work, and it has evolved into a full-fledged career.
        </motion.p>
        <motion.p 
        ref={ref}
          className='text-base sm:text-lg text-gray-300'
          initial={{ opacity: 0, y: 50 }}
          animate={inView?{ opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I specialize in front-end development using React and Tailwind CSS, but I also have experience with back-end technologies like Node.js and Express. My goal is to build user-friendly interfaces that provide an exceptional user experience.
        </motion.p>
      </div>
      <div className='max-w-4xl mx-auto p-4 sm:p-6 mt-8 sm:mt-10'>
        <motion.h2 
        ref={ref}
          className='text-2xl sm:text-3xl font-bold text-white mb-4'
          initial={{ opacity: 0, y: -50 }}
          animate={inView?{ opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >          Skills
        </motion.h2>
        <motion.ul 
        ref={ref}
          className='list-disc list-inside text-base sm:text-lg text-gray-300 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4'
          initial={{ opacity: 0, y: 50 }}
          animate={inView?{ opacity: 1, y: 0 }:{}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <li>HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
          <li>RESTful APIs</li>
          <li>Agile Methodologies</li>
        </motion.ul>
    </div>
    </div>
  )
}

export default About