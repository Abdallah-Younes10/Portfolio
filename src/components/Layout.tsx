import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <div className='min-h-screen bg-black text-white/95 flex justify-center items-center flex-col'>
      <div className='  top-0 z-50 '>
        <Navbar />
      </div>
      <div className='pt-20'>
        <Outlet />
      </div>

<div className='w-full'>
      <Footer/>

</div>
    </div>
  )
}
