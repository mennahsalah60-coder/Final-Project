'use client'
import './blog.css'
import Image from 'next/image'
import Link from 'next/link'
import gall1 from '../../public/gallery.png'
import gall2 from '../../public/gallery (1).png'
import gall3 from '../../public/gallery (2).png'
import gall4 from '../../public/gallery (3).png'
import gall5 from '../../public/gallery (4).png'
import gall6 from '../../public/gallery (5).png'
import gall7 from '../../public/gallery (6).png'
import gall8 from '../../public/gallery (7).png'
import image1 from '../../public/Image (22).png'
import image2 from '../../public/Image (23).png'
import image3 from '../../public/Image (24).png'
import arrow from '../../public/Arrow (1).png'
import { result } from './result'
export default function Page() {

    return (
        <>
            <section className='blog'>
                <div className='image'></div>
                <div className='countainer allList'>
                    <div className='search'>
                        <div className='input'>
                            <div className='inDiv'>
                                <input type="text" placeholder='Search...' />
                            </div>
                            <div className='topCatego'>
                                <h2>Top Categories</h2>
                                <div>
                                    <h3>Fresh Fruit</h3>
                                    <p>(134)</p>
                                </div>
                                <div>
                                    <h3>Vegetables</h3>
                                    <p>(150)</p>
                                </div>
                            </div>
                        </div>

                        <div className='popDiv'>
                            <h3>Popular Tag</h3>
                            <div>
                                <p>Healthy</p>
                                <p>Low fat</p>
                                <p>Vegetarian</p>
                                <p>Bread</p>
                                <p>Kid</p>
                                <p>Vitamins</p>
                                <p>Snacks</p>
                                <p>Tiffin</p>
                                <p>Meat</p>
                                <p>Launch</p>
                                <p>Dinner</p>
                            </div>
                        </div>

                        <div className='gallery'>
                            <h3>Our Gallery</h3>
                            <div>
                                <Image src={gall1} alt='....' />
                                <Image src={gall2} alt='....' />
                                <Image src={gall3} alt='....' />
                                <Image src={gall4} alt='....' />
                                <Image src={gall5} alt='....' />
                                <Image src={gall6} alt='....' />
                                <Image src={gall7} alt='....' />
                                <Image src={gall8} alt='....' />
                            </div>
                        </div>

                        <div className='added'>
                            <h3>Recently Added</h3>
                            <div className='calender'>
                                <div className='flex gap-2'>
                                    <Image width={90} src={image1} alt='...' />
                                    <div>
                                        <p>Curabitur porttitor orci eget nequ accumsan.</p>
                                        <p className='date'>Apr 25, 2021</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <Image width={90} src={image2} alt='...' />
                                    <div>
                                        <p>Donec mattis arcu faucibus suscipit viverra.</p>
                                        <p className='date'>Apr 25, 2021</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <Image width={100} src={image3} alt='...' />
                                    <div>
                                        <p>Quisque posuere tempus rutrum. Integer velit ex.</p>
                                        <p className='date'>Apr 25, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='results'>
                        <div className='result'>
                            {result.map(res => {
                                return (
                                    <div key={res.id}>
                                        <Image className='first' src={res.image} alt='...' />
                                        <p>
                                            {res.dis}
                                        </p>
                                        <Link href={`/blog/${res.id}`}>
                                            Read More
                                            <Image src={arrow} alt='...' />
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
