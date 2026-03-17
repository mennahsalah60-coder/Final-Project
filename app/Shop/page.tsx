'use client';
import './shop.css'
import view from '../../public/Group (2).png'
import { useEffect, useState } from 'react';
import deleted from '../../public/Cross 12px.png';
import Image from 'next/image';
import { useCart } from '../components/addToCart/Cart';
import addToCart from '../../public/Add To Cart.png'
import remove from '../../public/Add To Cart (1).png'

export default function About() {
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('')
    const [fruits, setFruits] = useState<Fruit[]>([]);
    const [vegetables, setVegetables] = useState<vegetable[]>([]);
    const { cart, setCart } = useCart()

    // TIMER IS HERE
    const [time, setTime] = useState({
        days: 0,
        hours: 2,
        minutes: 18,
        seconds: 46,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                let { days, hours, minutes, seconds } = prev

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59
                    if (minutes > 0) {
                        minutes--
                    } else {
                        minutes = 59
                        if (hours > 0) {
                            hours--
                        } else {
                            hours = 23
                            if (days > 0) {
                                days--
                            }
                        }
                    }
                }
                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                }
                return { days, hours, minutes, seconds };
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    type Fruit = {
        id: number;
        image: string;
        name: string;
        price: number;
        sale: number;
        category: string;
    };

    type vegetable = {
        id: number;
        name: string;
        price: number;
        sale: number;
        image: string;
        category: string;
    };


    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then((data) => {
                setFruits(data.fruits);
                setVegetables(data.vegetables);
            })
            .catch(err => console.error(err));
    }, []);

    // category 
    const displayedProducts = category === 'fruits' ? fruits :
        category === 'vegetables' ? vegetables :
            [...fruits, ...vegetables];

    // price
    const filteredProducts = displayedProducts.filter(product => {
        if (!price) return true;
        if (price === "10$ - 20$") return product.price >= 10 && product.price <= 20;
        if (price === "30$ - 40$") return product.price >= 30 && product.price <= 40;
        return true
    });

    return (
        <>
            <section className='discount'>
                <div className='countainer count'>
                    <h4>Best Deals</h4>
                    <h2>Sale of the Month</h2>
                    <div className='times flex'>
                        <div className='timer'>
                            <h3>{String(time.days).padStart(2, "0")}</h3>
                            <p>:</p>
                            <p>Days</p>
                        </div>

                        <div className='timer'>
                            <h3>{String(time.hours).padStart(2, "0")}</h3>
                            <p>:</p>
                            <p>Hours</p>
                        </div>

                        <div className='timer'>
                            <h3>{String(time.minutes).padStart(2, "0")}</h3>
                            <p>:</p>
                            <p>Mins</p>
                        </div>

                        <div className='time'>
                            <h3>{String(time.seconds).padStart(2, "0")}</h3>
                            <p>Secs</p>
                        </div>
                    </div>
                    <div className='shop1'>
                        <div className='shop'>
                            <button
                                onClick={() => {
                                    const element = document.getElementById("products");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            > Shop Now </button>
                        <Image src={view} alt="" />
                    </div>
                </div>
            </div>
        </section >

            <section className='filter'>
                <div className='countainer things'>
                    <div>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                        </select>
                    </div>
                    <div>
                        <select
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                            <option value="" disabled>Select Price (min - max)</option>
                            <option value="10$ - 20$">10$ - 20$</option>
                            <option value="30$ - 40$">30$ - 40$</option>
                        </select>
                    </div>
                </div>

                <section className='all-filter'>
                    <div className='filtered countainer'>
                        <div className='flex gap-10'>
                            <h3>Active Filters: </h3>
                            {category && (
                                <div className='flex gap-5 name' onClick={() => setCategory('')}>
                                    <h4>{category}</h4>
                                    <Image src={deleted} alt="" />
                                </div>
                            )}
                            {price && (
                                <div className='flex gap-5 name' onClick={() => setPrice('')}>
                                    <h4>{price}</h4>
                                    <Image src={deleted} alt="" />
                                </div>
                            )}
                        </div>
                        <div>
                            <h4>{filteredProducts.length} <span>Results found.</span></h4>
                        </div>
                    </div>
                </section>
            </section>

            <section className='pro' id='products'>
                <div className='countainer flex'>
                    <div className='products'>
                        {filteredProducts.map(item => (
                            <div className='product' key={item.id}>
                                {item.image && <Image src={item.image} alt={item.name} width={300} height={120} />}
                                <h4>{item.name}</h4>
                                <div className='flex justify-between'>
                                    <div className='price'>
                                        <p className='one'>${item.price}</p>
                                        <p className='two'>${(item.price * item.sale).toFixed(2)}</p>
                                    </div>
                                    <div>
                                        <button
                                            className={`add-to-cart cursor-pointer ${cart.some(p => p.id === item.id) ? 'added' : ''}`}
                                            onClick={() => {
                                                if (cart.some(p => p.id === item.id)) {
                                                    setCart(prev => prev.filter(p => p.id !== item.id));
                                                } else {
                                                    setCart(prev => [...prev, item]);
                                                }
                                            }}
                                        >
                                            <Image src={cart.some(p => p.id === item.id) ? remove : addToCart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
