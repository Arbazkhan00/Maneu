import React from 'react'
import Image from 'next/image'
import {AiOutlineShopping} from "react-icons/ai"
import {BiSearchAlt} from "react-icons/bi"
import { Badge } from "@/components/ui/badge"

import Logo from "@/app/components/assest/images/Logo.webp"

const Nav = () => {
  return (
    <div className='px-36 py-10'>
        <header >
            <nav className='flex gap-20 '>
              <div>
                <Image src={Logo} alt='Logo'/>
              </div>
                <ul className='flex gap-14 ml-8 sm:flex-col'>
                    <li>Male</li>
                    <li>Female</li>
                    <li>Kids</li>
                    <li>All Products</li>
                    </ul>
                   
                    <div className='border-gray-500  flex w-96'>
                    
                    <BiSearchAlt size={23}/>
                    
                   
                        <input type="search" placeholder='What you looking for'  className='w-80 text-center '/>
                    </div>

                    <div>
                      <span className='absolute  text-red-600 font-semibold text-xl rounded-full w-5 h-5 pt-5 ml-2 text-center top-0 '>0</span>
                      
                        <AiOutlineShopping size={28} />

                      
                    </div>
            </nav>
            
        </header>
    </div>
  )
}

export default Nav