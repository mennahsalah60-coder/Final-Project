'use client';
import './shop.css'
import view from '../../public/Group (2).png'
import { useEffect, useState } from 'react';
import deleted from '../../public/Cross 12px.png';
import Image from 'next/image';
import { useCart } from '../components/addToCart/Cart';
import addToCart from '../../public/Add To Cart.png'
import remove from '../../public/Add To Cart (1).png'
import rate from '../../public/Rating.png'
import brand from '../../public/Group 19.png'
import removeFromFav from '../../public/remove.svg'
import addToFav from '../../public/add.svg'
import { toast } from 'react-toastify';


export default function About() {
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('')
    const [fruits, setFruits] = useState<Product[]>([]);
    const [vegetables, setVegetables] = useState<Product[]>([]);
    const { cart, setCart } = useCart()
    const [fav, setFav] = useState<(Product)[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const notify = () => {
        toast.success('Product added to cart');
    };
    const notify_2 = () => {
        toast.error('Product removed from cart');
    };

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

    type Product = {
        id: number;
        name: string;
        price: number;
        sale: number;
        image: string;
        category: string;
        quantity: number;
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
                        <div className='flex gap-10 done'>
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
                    {filteredProducts.length === 0 && (
                        <div>
                            <h1 className='font-bold text-red-600'>No Products Yet !</h1>
                        </div>
                    )}
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
                                                const isExist = cart.some(p => p.id === item.id);

                                                if (isExist) {
                                                    setCart(prev => prev.filter(p => p.id !== item.id));

                                                    notify_2()

                                                } else {
                                                    setCart(prev => [...prev, { ...item, quantity: 1 }]);

                                                    notify()
                                                }
                                            }}
                                        >
                                            <Image src={cart.some(p => p.id === item.id) ? remove : addToCart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <Image src={rate} width={80} alt='' />
                                </div>
                                <div className='flex gap-5'>
                                    <button className='quick' onClick={() => {
                                        setSelectedProduct(item);
                                        setShowModal(true);
                                    }}>
                                        quick view
                                    </button>
                                </div>
                            </div>
                        ))}
                        {showModal && selectedProduct && (
                            <div className="overlay" onClick={() => setShowModal(false)}>

                                <div className="modal countainer" onClick={(e) => e.stopPropagation()}>

                                    <span className="close" onClick={() => setShowModal(false)}>X</span>

                                    <div className="content countainer">

                                        <div className="images">
                                            <Image
                                                src={selectedProduct.image}
                                                className="main-img"
                                                alt=''
                                                width={300}
                                                height={300}
                                            />
                                        </div>

                                        <div className="info">
                                            <h2>{selectedProduct.name}</h2>
                                            <Image src={rate} alt='' />
                                            <div className='flex gap-10 top'>
                                                <div className='flex gap-2 align-items-center text-center'>
                                                    <p className='sale'>{selectedProduct.price * selectedProduct.sale}</p>
                                                    <p className='before'>{selectedProduct.price}</p>
                                                </div>
                                                <div>
                                                    <p className='pre'>{selectedProduct.sale * 100}%</p>
                                                </div>
                                            </div>

                                            <div className='share'>
                                                <div className='brand flex'>
                                                    <h5>Brand: </h5>
                                                    <Image src={brand} alt='' />
                                                </div>
                                                <div>
                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi amet id reiciendis? Quo optio voluptatum adipisci soluta quia quaerat facere odio, officia velit ducimus. Odit mollitia repellendus ullam minima?</p>
                                                </div>
                                            </div>
                                            <div className='btns'>
                                                <button
                                                    className={`cart ${cart.some(p => p.id === selectedProduct.id) ? 'added' : ''}`}
                                                    onClick={() => {
                                                        if (cart.some(p => p.id === selectedProduct.id)) {
                                                            setCart(prev => prev.filter(p => p.id !== selectedProduct.id));
                                                        } else {
                                                            setCart(prev => [...prev, selectedProduct]);
                                                        }
                                                    }}
                                                >
                                                    <h2>{cart.some(p => p.id === selectedProduct.id) ? "Remve From Cart" : "Add To Cart"}</h2>
                                                </button>
                                                <button className='addToFav' onClick={() => {
                                                    if (fav.some(p => p.id === selectedProduct.id)) {
                                                        setFav(prev => prev.filter(p => p.id !== selectedProduct.id));
                                                    } else {
                                                        setFav(prev => [...prev, selectedProduct]);
                                                    }
                                                }}>
                                                    <Image
                                                        src={fav.some(p => p.id === selectedProduct.id) ? addToFav : removeFromFav}
                                                        alt="fav"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </button>
                                            </div>
                                            <div className='cat flex gap-2'>
                                                <h3>Category: </h3>
                                                <p>{selectedProduct.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
