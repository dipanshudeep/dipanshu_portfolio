import React from 'react'
import {motion} from 'framer-motion';

function Home() {
  return (
 
    <div className='min-h-screen w-full px-4 sm:px-6 bg-gradient-to-r from-amber-900 to-gray-900 flex flex-col lg:flex-row items-center justify-center'>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <motion.h1 
                className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center lg:text-left'
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi I'm <span className='text-amber-500'>Dipanshu</span>
               <p className="text-lg sm:text-2xl"> A MERN Stack Developer</p>
            </motion.h1>
            <motion.h1 
                className='text-2xl sm:text-4xl md:text-5xl text-white mb-4 text-center lg:text-left'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Welcome to My Portfolio
            </motion.h1>
            <motion.p 
                className='text-base sm:text-lg md:text-xl text-gray-300 text-center lg:text-left'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Explore my projects and get to know me better.
            </motion.p>
            <motion.div 
                className='mt-6 flex justify-center lg:justify-start'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <a href="/projects" className='px-6 py-3 bg-amber-500 text-white rounded-lg shadow-lg hover:bg-amber-600 transition duration-300'>
                    View Projects
                </a>
            </motion.div>
        </div>
        {/* add image section */}
        <motion.div 
            className='w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <img src="https://www.kinosphere.in/images/ahimsa.jpg" alt="Portfolio" className='rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover shadow-lg' />
        </motion.div>
    </div>
  )
}

export default Home