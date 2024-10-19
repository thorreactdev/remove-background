import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  return (
    <>
    <nav className='flex justify-between items-center max-w-7xl mx-auto py-4 px-3'>
        <Link>
        <figure>
            <img src='/logo.svg' alt='Bg Removal Logo' title='Bg Removal Logo' className='h-10'/>
        </figure>
        </Link>

        <div>
            <Button  size="lg" className="bg-gradient-to-t from-[#ff0885] to-[#f14814] hover:from-[#ff0844] hover:to-[#ffb199] font-bold">
                Get Started
            </Button>
        </div>
    </nav>
    </>
  )
}

export default Header