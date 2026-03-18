import './footer.css'
import Image from 'next/image'
import logo from '../../../public/Logo (1).png'
import Link from 'next/link'
import pay from '../../../public/Method=ApplePay.png'
import visa from '../../../public/Method=Visa.png'
import discover from '../../../public/Method=Discover.png'
import master from '../../../public/Method=Mastercard.png'
import cart from '../../../public/Cart.png'

export default function Footer() {
    return (
        <>
            <section className="footer">
                <div className='countainer sub'>
                    <div>
                        <h2>Subcribe our Newsletter</h2>
                        <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                            Phasellus imperdiet elit eu magna.
                        </p>
                    </div>
                    <div className='email'>
                        <div>
                            <input type="email" placeholder='Your email addresss' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className='countainer'>
                    <div className='footer-logo'>
                        <div>
                            <Image src={logo} alt="" />
                            <p className='long'>Morbi cursus porttitor enim lobortis molestie.
                                Duis gravida turpis dui, eget bibendum magna
                                congue nec.
                            </p>
                            <div className='call flex gap-4'>
                                <p>(219) 555-0114</p>
                                <p className='or'>or</p>
                                <p>Proxy@gmail.com</p>
                            </div>
                        </div>
                        <div className='link flex gap-15'>
                            <div className='links'>
                                <h2>My Account</h2>
                                <Link href='#'>My Account</Link>
                                <Link href='#'>Order History</Link>
                                <Link href='#'>Shoping Cart</Link>
                                <Link href='#'>Wishlist</Link>
                            </div>
                            <div className='links'>
                                <h2>Helps</h2>
                                <Link href='/contact'>Contact</Link>
                                <Link href='/faqs'>FAQs</Link>
                                <p>Terms & Condition</p>
                                <p>Privacy Policy</p>
                            </div>
                            <div className='links'>
                                <h2>Proxy</h2>
                                <Link href='#'>About</Link>
                                <Link href='/Shop'>Shop</Link>
                                <Link href='#'>Product</Link>
                                <Link href='#'>Track Order</Link>
                            </div>
                            <div className='links'>
                                <h2>Categories</h2>
                                <p>Fruit & Vegetables</p>
                                <p>Meat & Fish</p>
                                <p>Bread & Bakery</p>
                                <p>Beauty & Health</p>
                            </div>
                        </div>
                    </div>

                    <div className='money'>
                        <p>Ecobazar eCommerce © 2026. All Rights Reserved</p>
                        <div>
                            <Image src={pay} alt="" />
                            <Image src={visa} alt="" />
                            <Image src={discover} alt="" />
                            <Image src={master} alt="" />
                            <Image src={cart} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
