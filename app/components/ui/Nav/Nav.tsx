import React from 'react'
import Image from 'next/image'
import {AiOutlineShopping} from "react-icons/ai"
import {BiSearchAlt} from "react-icons/bi"
import { Badge } from "@/components/ui/badge"

import Logo from "@/app/components/assest/images/Logo.webp"

const Nav = () => {
  return (
    <div className='px-36 py-10 text-center items-center'>
        <header className=' flex gap-20' >
        <div className=' absolute xs:flex-col '>
                <Image src={Logo} alt='Logo' />
              </div>
            <nav className='flex gap-14 xs:flex-col' >
              
                <ul className='flex gap-10 ml-56 xs:flex-col xs:text-center'>
                    <li>Male</li>
                    <li>Female</li>
                    <li>Kids</li>
                    <li>All Products</li>
                    </ul>
                   
                    <div className='border-gray-500  flex ml-8 xs:flex-col'>
                    
                    <BiSearchAlt size={23}/>
                    
                   
                        <input type="search" placeholder='What you looking for' width={54}  className=' text-center '/>
                    </div>

                    <div className='xs:flex-col ml-8'>
                      <span className='absolute  text-red-600 font-semibold text-xl rounded-full w-5 h-5 pt-5 text-center top-0 '>0</span>
                      
                        <AiOutlineShopping size={28} />

                      
                    </div>
            </nav>
            
        </header>
    </div>
  )
}

export default Nav