import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function Layout() {
  return (<>  
  <div backgroundimage ='../assets/vid.mp4' className='min-h-screen w-full bg-gradient-to-b from-amber-100 to-yellow-100 flex flex-col items-center``'> 
     <Home/>
    <Projects/>
    <About/>
    <Contact/>
    </div>
    </>

  )
}

export default Layout