import React from 'react'
import { appleImg, searchImg, bagImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-11 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple" width={14} height={18} />
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav) => (
                    <div key={nav} className='px-5 cursor-pointer text-gray text-sm
                     hover:text-white transation-all'>
                        {nav}
                    </div>
                ))}
            </div>
            <div className='flex items-baselind gap-7
             max-sm:flex-1 justify-end'>
                <img src={searchImg} alt="Search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar