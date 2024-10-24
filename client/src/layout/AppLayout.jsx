import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/Footer'

const AppLayout = () => {
  return (
    <>
    <Toaster/>
    <header className=' bg-white shadow-xl'>
        <Header/>
    </header>
    <main className='max-w-7xl mx-auto min-h-screen'>
        <Outlet/>
    </main>
    <footer className='shadow-xl bg-white border mt-10'>
      <Footer/>
    </footer>
    </>
  )
}

export default AppLayout