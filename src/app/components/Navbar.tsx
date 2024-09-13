import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

    const user =false;
    return (
        <div className='h-12 md:h-24 lg:px-24 xl:px-40text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase '>
     {/* LEFT LINKS */}
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href={"/"}>Homepage</Link>
                <Link href={"/menu"}>Menu</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>

            {/* LOGO*/}
            <div className='text-xl md:font-bold flex-1 md:text-center'>
                <Link href={"/"}> Massiomo  </Link>
            </div>

            {/* MOBILE MENU*/}

            <div className='md:hidden'>
                <Menu />
            </div>

            {/* RIGHT LINKS */}

            <div className='hidden md:flex gap-4 flex-1 justify-end'>

                <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
                    <Image src={"/phone.png"} width={20} height={20}/>

                    <span>123 456 789</span>
                </div>

               { !user ?<Link href={"/login"}>Login</Link>:
                <Link href={"/orders"}>Orders</Link>}
                <CartIcon />
            </div>

        </div>
    )
}

export default Navbar