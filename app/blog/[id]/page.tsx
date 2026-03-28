import Image from 'next/image'
import { result } from '../result'
// import Image from 'next/image'
import Link from 'next/link'
import './list.css'
import view from '../../../public/Group (2).png'
import gall1 from '../../../public/gallery.png'
import gall2 from '../../../public/gallery (1).png'
import gall3 from '../../../public/gallery (2).png'
import gall4 from '../../../public/gallery (3).png'
import gall5 from '../../../public/gallery (4).png'
import gall6 from '../../../public/gallery (5).png'
import gall7 from '../../../public/gallery (6).png'
import gall8 from '../../../public/gallery (7).png'
import image1 from '../../../public/Image (22).png'
import image2 from '../../../public/Image (23).png'
import image3 from '../../../public/Image (24).png'
import image4 from '../../../public/image (36).png'
import image5 from '../../../public/image (37).png'
import person from '../../../public/Images.png'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const item = result.find(el => el.id === Number(id));

    if (!item) {
        return <h1>Not Found</h1>;
    }

    return (
        <section className='singleBlog'>
            <div className='image'></div>
            <div className='countainer allSingle flex gap-5'>
                <div className='results'>
                    <Image  className='mainImg' src={item.image} alt='' />
                    <p className='dis'>{item.dis}</p>
                    <div className='person'>
                        <Image src={person} alt='' />
                        <div>
                            <h3>Cameron Williamson</h3>
                            <p>4 April, 2021 • 6 min read</p>
                        </div>
                    </div>

                    <div className='text'>
                        <h4>Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.</h4>
                        <p>Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.</p>
                        <p>Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus.
                            Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.</p>
                        <div className='imgs'>
                            <Image src={image4} alt='' />
                            <Image src={image5} alt='' />
                        </div>
                        <p>Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.</p>
                    </div>
                    <div className='imageBtn'>
                        <p>Summer Sales</p>
                        <h2>Fresh Fruit</h2>
                        <div className='shop1'>
                            <div className='shop'>
                                <button
                                > <Link href='/Shop'>Shop Now</Link> </button>
                                <Image src={view} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='comment'>
                        <h2>Leave a Comment</h2>
                        <form>
                            <div className='inputs'> 
                                <div>
                                    <label htmlFor="">Full Name</label>
                                    <input type="text" placeholder='Enter Your Name' />
                                </div>
                                <div>
                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder='Enter Your Email' />
                                </div>
                            </div>
                            <label htmlFor="">Message</label>
                            <textarea name="text" placeholder='Write your comment here…' />
                            <div className='flex align-items-center gap-2'>
                                <input type="radio" />
                                <p>Save my name and email in this browser for the next time I comment.</p>
                            </div>
                            <button className='shop'>Post Comments</button>
                        </form>
                    </div>

                    <div className='comments'>
                        <h2>Comments</h2>
                        <div className='allComm'>

                            <div className='oneComment'>
                                <Image src={person} alt='' />
                                <div>
                                    <div className='flex gap-2'>
                                        <h3>Annette Black .</h3>
                                        <p>26 Apr, 2021</p>
                                    </div>
                                    <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                                </div>
                            </div>

                            <div className='oneComment'>
                                <Image src={person} alt='' />
                                <div>
                                    <div className='flex gap-2'>
                                        <h3>Devon Lane</h3>
                                        <p>26 Apr, 2021</p>
                                    </div>
                                    <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                                </div>
                            </div>
{/* 
                            <div className='oneComment'>
                                <Image src={person} alt='' />
                                <div>
                                    <div className='flex gap-2'>
                                        <h3>Jacob Jones</h3>
                                        <p>26 Apr, 2021</p>
                                    </div>
                                    <p>Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros.</p>
                                </div>
                            </div>

                            <div className='oneComment'>
                                <Image src={person} alt='' />
                                <div>
                                    <div className='flex gap-2'>
                                        <h3>Jane Cooper</h3>
                                        <p>26 Apr, 2021</p>
                                    </div>
                                    <p>In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.</p>
                                </div>
                            </div> */}
                        </div>
                        <button className='shop'>Load More</button>
                    </div>
                </div>

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
            </div>
        </section>
    )
}