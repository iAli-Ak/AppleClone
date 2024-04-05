import React from 'react'
import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-gray text-xs'>
                    More ways to shop: {" "}
                    <span className='hover:underline text-blue cursor-pointer'>
                        Find an Apple Store {" "}
                    </span>
                        or {" "}
                    <span className='hover:underline text-blue cursor-pointer'>
                        other retailer
                    </span>
                    {" "}
                    near you.
                </p>
                <p className='font-semibold text-gray text-xs mt-1'>Or call <span className='text-blue hover:underline cursor-pointer'>050483-539-2345</span></p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px]' />
                <div className='flex md:flex-row flex-col md:items-center justify-between'>
                    <p className='font-semibold text-gray text-xs'>
                     Copyright @ 2024 Apple Inc. All rights reversed.
                    </p>
                    <div className='flex'>
                        {footerLinks.map((link, i) => (
                            <p key={link} className='font-semibold text-xs text-gray hover:text-white'>
                            {link}{" "}
                            {i !== footerLinks.length - 1 && (<span className='mx-2'> | </span>)}
                            </p>
                        ))}
                    </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;