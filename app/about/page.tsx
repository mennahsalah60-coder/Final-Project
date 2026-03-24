import Image from 'next/image'
import Link from 'next/link'
import image1 from '../../public/Image (10).png'
import image2 from '../../public/Image (12).png'
import icon1 from '../../public/Icon.png'
import icon2 from '../../public/Icon (1).png'
import icon3 from '../../public/Icon (2).png'
import icon4 from '../../public/Icon (3).png'
import icon5 from '../../public/Icon (4).png'
import icon6 from '../../public/Icon (5).png'
import man from '../../public/Image (14).png'
import check from '../../public/Check.png'
import team1 from '../../public/Image (15).png'
import team2 from '../../public/Image (16).png'
import team3 from '../../public/Image (17).png'
import team4 from '../../public/Image (18).png'
import vec from '../../public/Vector.png'
import rate from '../../public/Rating (1).png'
import client1 from '../../public/Image (19).png'
import client2 from '../../public/Image (20).png'
import client3 from '../../public/Image (21).png'
import './about.css'

export default function page() {
    return (
        <>
            <section className='trust'>
                <div className='countainer allTh'>
                    <div className='first'>
                        <div className='one'>
                            <h2>100% Trusted Organic Food Store</h2>
                            <p>
                                Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                            </p>
                        </div>
                        <div className='two'>
                            <Image src={image1} alt="added" />

                        </div>
                    </div>
                    <div className='secound'>
                        <div className='one'>
                            <Image src={image2} alt="added" />
                        </div>
                        <div className='two'>
                            <h2>100% Trusted Organic Food Store</h2>
                            <p>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </p>
                            <div className='icons'>
                                <div className='icon'>
                                    <Image src={icon1} alt="added" />
                                    <div>
                                        <h3>100% Organic food</h3>
                                        <p>100% healthy & Fresh food.</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <Image src={icon2} alt="added" />
                                    <div>
                                        <h3>Great Support 24/7</h3>
                                        <p>Instant access to Contact</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <Image src={icon3} alt="added" />
                                    <div>
                                        <h3>Customer Feedback</h3>
                                        <p>Our happy customer</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <Image src={icon4} alt="added" />
                                    <div>
                                        <h3>100% Sucure Payment</h3>
                                        <p>We ensure your money is save</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <Image src={icon5} alt="added" />
                                    <div>
                                        <h3>Free Shipping</h3>
                                        <p>Free shipping with discount</p>
                                    </div>
                                </div>
                                <div className='icon'>
                                    <Image src={icon6} alt="added" />
                                    <div>
                                        <h3>100% Organic Food</h3>
                                        <p>100% healthy & Fresh food.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third'>
                        <div>
                            <h2>We Delivered, You Enjoy Your Order.</h2>
                            <p>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus.
                                Curabitur auctor bibendum nunc eget elementum.</p>
                            <div className='check'>
                                <div className='flex gap-2'>
                                    <Image src={check} alt="added" />
                                    <p>Sed in metus pellentesque.</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Image src={check} alt="added" />
                                    <p>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
                                </div>
                                <div className='flex gap-2'>
                                    <Image src={check} alt="added" />
                                    <p>Maecenas ut nunc fringilla erat varius.</p>
                                </div>
                            </div>
                            <button className='shop'> <Link href='/Shop'>Shop Now</Link></button>
                        </div>
                        <div>
                            <Image className='img' src={man} alt="added" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='team'>
                <div className='countainer here'>
                    <h1>Our Awesome Team</h1>
                    <p>
                        Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
                    </p>
                    <div className='flex gap-5 teams'>
                        <div>
                            <Image src={team1} alt="added" />
                            <h3>Jenny Wilson</h3>
                            <p>Ceo & Founder</p>
                        </div>
                        <div>
                            <Image src={team2} alt="added" />
                            <h3>Jane Cooper</h3>
                            <p>Worker</p>
                        </div>
                        <div>
                            <Image src={team3} alt="added" />
                            <h3>Cody Fisher</h3>
                            <p>Security Guard</p>
                        </div>
                        <div>
                            <Image src={team4} alt="added" />
                            <h3>Robert Fox</h3>
                            <p>Senior Farmer Manager</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='client'>
                <div className='countainer allThem'>
                    <h1>Client Testimonail</h1>
                    <div className='clients'>
                        <div className='alone'>
                            <Image className='vector' src={vec} alt="added" />
                            <p>
                                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
                            </p>
                            <div className='photo'>
                                <div className='flex gap-2'>
                                    <Image src={client1} alt="added" />
                                    <div>
                                        <h3>Robert Fox</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                                <Image src={rate} alt="added" />
                            </div>
                        </div>

                        <div className='alone'>
                            <Image className='vector' src={vec} alt="added" />
                            <p>
                                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
                            </p>
                            <div className='photo'>
                                <div className='flex gap-2'>
                                    <Image src={client2} alt="added" />
                                    <div>
                                        <h3>Dianne Russell</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                                <Image src={rate} alt="added" />
                            </div>
                        </div>

                        <div className='alone'>
                            <Image className='vector' src={vec} alt="added" />
                            <p>
                                Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
                            </p>
                            <div className='photo'>
                                <div className='flex gap-2'>
                                    <Image src={client3} alt="added" />
                                    <div>
                                        <h3>Eleanor Pena</h3>
                                        <p>Customer</p>
                                    </div>
                                </div>
                                <Image src={rate} alt="added" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
