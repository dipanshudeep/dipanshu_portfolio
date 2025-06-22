import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function Contact() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-r from-amber-900 to-gray-900 pt-20'>
      <div className='max-w-4xl mx-auto p-4 sm:p-6'>
        <motion.h1 
          className='text-3xl sm:text-4xl font-bold text-white mb-4'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h1>
        <motion.p 
          className='text-base sm:text-lg text-gray-300 mb-6'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I would love to hear from you! Whether you have a question about my work, want to collaborate on a project, or just want to say hi, feel free to reach out.
        </motion.p>
        <motion.form 
          className='space-y-4'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input type="text" placeholder="Your Name" className='w-full p-3 rounded-lg bg-gray-800 text-white text-base' />
          <input type="email" placeholder="Your Email" className='w-full p-3 rounded-lg bg-gray-800 text-white text-base' />
          <textarea placeholder="Your Message" className='w-full p-3 rounded-lg bg-gray-800 text-white h-32 text-base'></textarea>
          <button type="submit" className='px-6 py-3 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600 transition duration-300 w-full sm:w-auto'>
            Send Message
          </button>
        </motion.form>
      </div>
      <div className='max-w-4xl mx-auto p-4 sm:p-6 mt-8 sm:mt-10'>
        <motion.h2 
          className='text-2xl sm:text-3xl font-bold text-white mb-4'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >          Connect with Me
        </motion.h2>
        <motion.div 
          className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="" className='text-amber-500 hover:text-amber-600 transition duration-300'>
            LinkedIn
          </a>
          <a href="" className='text-amber-500 hover:text-amber-600 transition duration-300'>
            GitHub
          </a>
          <a href="" className='text-amber-500 hover:text-amber-600 transition duration-300'>
            Twitter
          </a>
        </motion.div> 
    </div>
    </div>
  )
}

export default Contact