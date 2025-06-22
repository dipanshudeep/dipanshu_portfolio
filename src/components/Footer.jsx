import React from 'react'

function Footer() {
  return (
    <div className='w-full px-4 sm:px-6 bg-gradient-to-r from-amber-900/0 to-gray-900'>
      <div className='max-w-4xl mx-auto py-6 text-center'>
        <p className='text-gray-300 text-xs sm:text-sm'>
          &copy; {new Date().getFullYear()} Dipanshu. All rights reserved.
        </p>
        <div className='mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4'>
          <a href="https://www.linkedin.com/in/dipanshu" className='text-amber-200 hover:text-amber-600 transition duration-300'>
            LinkedIn
          </a>
          <a href="" className='text-amber-200 hover:text-amber-600 transition duration-300'>
            GitHub
          </a>
          <a href="" className='text-amber-200 hover:text-amber-600 transition duration-300'>
            Twitter
          </a>
        </div>
        <p className='text-black font-bold text-xs mt-2'>
          Built with ❤️ using React and Tailwind CSS
        </p>
      </div>
    </div>

  )
}

export default Footer