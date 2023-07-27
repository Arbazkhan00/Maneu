import React from 'react'
import Image from 'next/image'
import {AiOutlineShopping} from "react-icons/ai"
import {BiSearchAlt} from "react-icons/bi"
import { Badge } from "@/components/ui/badge"

import Logo from "@/app/components/assest/images/Logo.webp"
import { headers } from 'next/dist/client/components/headers'

const Nav = () => {
  return (
   <header className='bg-gray-500'>
    <nav className='flex justify-between items-center w-[92%] mx-auto'>
      <div>
        <Image src={Logo} alt='...'/>
      </div>


      <div className='static  min-max-h-fit xs:absolute w-auto  min-[60vh] left-0 top-[-100%] sx:w-full flex items-center px-5' >
        <ul className='flex md:flex-row xs:flex-col   md:items-center gap-[4vw] xs:gap-8'>
          <li>Female</li>
          <li  >Male</li>
          <li>Kids</li>
          <li>All Products</li>
        </ul>
      </div>


      <div className='xs:w-20'><input type="search" name="" id="" placeholder='what you looking  for' /></div>

      <div><AiOutlineShopping size="32"/></div>

    </nav>
   </header>
  )
}

export default Nav