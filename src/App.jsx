
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Layout from './components/Layout'




function App() {

  return (
    <>
    <div className=' bg-amber-100 flex flex-col items-center'>
      <Header/>
      {/* <Layout/> */}
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
