import './contact.css'
import view from '../../public/Group (2).png'
import map from '../../public/Map Pin (1).png'
import email from '../../public/Email.png'
import phone from '../../public/PhoneCall.png'
import mapImg from '../../public/Map Image.png'
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
    return (
        <>
            <section className='contactus'>
                <div className='contact'>
                    <div className='shop1 countainer'>
                        <div className='shop'>
                            <button><Link href='/Shop'> Shop Now</Link> </button>
                            <Image src={view} alt="" />
                        </div>
                    </div>
                </div>
                <div className='call countainer flex gap-6'>
                    <div className='one'>
                        <div>
                            <Image src={map} alt='' />
                            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                        </div>
                        <div>
                            <Image src={email} alt='' />
                            <p>Proxy@gmail.com</p>
                            <p>Help.proxy@gmail.com</p>
                        </div>
                        <div>
                            <Image src={phone} alt='' />
                            <p>(219) 555-0114</p>
                            <p>(164) 333-0487</p>
                        </div>
                    </div>
                    <div className='two'>
                        <div>
                            <h2>Just Say Hello!</h2>
                            <p>
                                Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
                            </p>
                            <form>
                                <div>
                                    <input type="text" placeholder='Template Cookie' />
                                    <input type="email" placeholder='zakirsoft@gmail.com' />
                                </div>
                                <input type="text" placeholder='Hello!' />
                                <textarea placeholder="Subject"></textarea>
                                <button className='shop'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <Image className='map' src={mapImg} alt='' />
                </div>
            </section>
        </>
    )
}
