import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <header className=' bg-white shadow-xl'>
        <Header/>
    </header>
    <main className='max-w-7xl mx-auto'>
        <Outlet/>
    </main>
    <footer>
    
    </footer>
    </>
  )
}

export default AppLayout