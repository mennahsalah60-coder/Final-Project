'use client'
import Link from 'next/link'
import Image from 'next/image'
import map from '../../../public/Map Pin.png'
import logo from '../../../public/Logo.png'
import heart from '../../../public/Heart.png'
import carts from '../../../public/cart-1-svgrepo-com.png'
import call from '../../../public/Call Now.png'
import burger from '../../../public/burger.svg'
import close from '../../../public/close.svg'
import './navbar.css'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import { useCart } from '../addToCart/Cart';
// import { useSearch } from './searchContext'

export default function Navbar() {
    const [isAdd, setIsAdd] = useState(false)
    const pathname = usePathname()
    const { cart } = useCart()
    // const { search, setSearch, loading } = useSearch()

    return (
        <>
            <section className='location-sec'>
                <div className='countainer location items-center'>
                    <div className='map'>
                        <Image src={map} alt="" />
                        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className='det'>
                        <p>Eng</p>
                        <p>USD</p>
                        <Link href="signin">Sign in</Link>
                        <p>/</p>
                        <Link href='/signup'>Sign up</Link>
                    </div>
                </div>
            </section>

            <section className='logo-sec'>
                <div className='countainer logo'>
                    <div>
                        <Image src={logo} alt="" />
                    </div>
                    <div className='all'>
                        <div className='w-7' onClick={() => setIsAdd(prev => !prev)}>
                            <Image className='burger' src={isAdd ? close : burger} alt="menu toggle" />
                        </div>
                        <ul className={`menu ${isAdd ? 'active' : ''}`}>
                            <div>
                                <Link href="/signin">Sign in / </Link>
                                <Link href="/signup"> Sign Up</Link>
                            </div>
                            <Link href='/home' className={pathname === "/" ? "active" : ""}>Home</Link>
                            <Link href="/Shop" className={pathname === "/Shop" ? "active" : ""}>Shop</Link>
                            <Link href='/pages' className={pathname === "/pages" ? "active" : ""}>Pages</Link>
                            <Link href='/blog' className={pathname === "/blog" ? "active" : ""}>Blog</Link>
                            <Link href='#'>About Us</Link>
                            <Link href='#'>Contact Us</Link>
                            <p>Eng</p>
                            <p>USD</p>
                        </ul>
                    </div>
                    <div className='search'>
                        <input type="text"
                            // value={search}
                            // onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search' />
                        {/* {loading && <p>Loading...</p>} */}
                        {/* <ul>
                            {result.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul> */}
                        <div>
                            <button className=''>Search</button>
                        </div>
                    </div>
                    <div className='fav'>
                        <Image className='heart' src={heart} alt="" />
                        |
                        <div>
                            <Image src={carts} alt="" />
                            <div>
                                <p className='counter'>{cart.length}</p>
                                <p>Shopping cart:</p>
                                <p>00$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav>
                <div className='navbar countainer'>
                    <div className='links'>
                        <Link href='/home' className={pathname === "/home" ? "active" : ""}>Home</Link>
                        <Link href="/Shop" className={pathname === "/Shop" ? "active" : ""}>Shop</Link>
                        <Link href='/pages' className={pathname === "/pages" ? "active" : ""}>Pages</Link>
                        <Link href='/blog' className={pathname === "/blog" ? "active" : ""}>Blog</Link>
                        <Link href='#'>About Us</Link>
                        <Link href='#'>Contact Us</Link>
                    </div>
                    <div>
                        <Image src={call} alt='' />
                    </div>
                </div>
            </nav>
        </>
    )
}
