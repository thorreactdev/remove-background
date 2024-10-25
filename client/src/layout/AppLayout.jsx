import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/Footer'

const AppLayout = () => {
  return (
    <div  className="flex flex-col min-h-screen">
    <Toaster/>
    <header className=' bg-white shadow-xl'>
        <Header/>
    </header>
    <main className='flex-grow max-w-7xl mx-auto'>
        <Outlet/>
    </main>
    <footer className='shadow-xl bg-white border mt-10'>
      <Footer/>
    </footer>
    </div>
  )
}

export default AppLayout