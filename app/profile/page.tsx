'use client'

import './profile.css'
import Image from 'next/image'
import dash1 from '../../public/dashboard 2.svg'
import setting from '../../public/dashboard 2 (6).svg'
import toCart from '../../public/dashboard 2 (5).svg'
import out from '../../public/dashboard 2 (3).svg'
import history from '../../public/dashboard 2 (4).svg'
import photo from '../../public/profile-round-1342-svgrepo-com.svg'
import close from '../../public/Close (1).svg'
import minus from '../../public/Minus.svg'
import plus from '../../public/Plus.svg'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../components/navbar/AuthContext'
import { useRouter } from 'next/navigation'
import { useCart } from '../../app/components/addToCart/Cart'

type FormDataType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    Company: string;
    Address: string;
};

type PasswordType = {
    current: string;
    password: string;
    confirm: string;
};

export default function Page() {
    const [active, setActive] = useState<string>('dashboard')
    const { logout, user, updateUser } = useAuth()
    const router = useRouter();
    const { cart, setCart } = useCart()
    const increaseQty = (id: number) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id: number) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity > 1 ? item.quantity - 1 : 1
                    }
                    : item
            )
        );
    };

    const subtotal = cart.reduce((t, p) =>
        t + (Number(p.price) || 0) * (Number(p.quantity) || 1),
        0);

    const [formData, setFormData] = useState<FormDataType>({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phone: user?.phone || '',
        Company: user?.Company || '',
        Address: user?.Address || '',
    })

    const [passwordData, setPasswordData] = useState<PasswordType>({
        current: '',
        password: '',
        confirm: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleLogout = () => {
        logout();
        router.push("/home");
    };

    const handleSave = () => {
        updateUser(formData);
        alert("Saved successfully ✅");
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        })
    }

    const handlePasswordSave = () => {
        if (passwordData.password !== passwordData.confirm) {
            alert("Passwords do not match ❌");
            return;
        }

        updateUser({
            password: passwordData.password,
        });

        alert("Password updated successfully ✅");
    };


    return (
        <>
            <section className='profile'>
                <div className='allProfile countainer flex justify-around'>
                    <div className='right'>
                        <h1>Navigation</h1>
                        <div className={`navegates flex gap-1 ${active === 'dashboard' ? 'active' : ''}`} onClick={() => setActive('dashboard')}>
                            <Image src={dash1} alt='' />
                            <h2>Dashboard</h2>
                        </div>
                        <div className={`navegates flex gap-1 ${active === 'history' ? 'active' : ''}`} onClick={() => setActive('history')}>
                            <Image src={history} alt='' />
                            <h2>Order History</h2>
                        </div>

                        <div className={`navegates flex gap-1 ${active === 'cart' ? 'active' : ''}`} onClick={() => setActive('cart')}>
                            <Image src={toCart} alt='' />
                            <h2>Shopping Cart</h2>
                        </div>

                        <div className={`navegates flex gap-1 ${active === 'settings' ? 'active' : ''}`} onClick={() => setActive('settings')}>
                            <Image src={setting} alt='' />
                            <h2>Settings</h2>
                        </div>

                        <div className='navegates flex gap-1'>
                            <Image src={out} alt='' />
                            <button
                                onClick={() => {
                                    logout()
                                    handleLogout()
                                    alert("You have been logged out successfully")
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>


                    <div className='left'>
                        <div className='here'>
                            {active === 'dashboard' &&
                                <>
                                    <div className='details flex gap-10'>
                                        <div className='one'>
                                            <div className='img'>
                                                <Image src={photo} alt='' />
                                            </div>
                                            <h2> {user?.firstName} {user?.lastName}</h2>
                                            <p>Customer</p>

                                            <button onClick={() => setActive('settings')}>
                                                <Link href=''>Edit Profile</Link>
                                            </button>
                                        </div>
                                        <div className='two'>
                                            <p>Billing Address</p>
                                            <h2>{user?.firstName} {user?.lastName}</h2>
                                            <p>
                                                {user?.Address}
                                            </p>
                                            <h3>{user?.email}</h3>
                                            <h3>{user?.phone}</h3>
                                            <button onClick={() => setActive('settings')}>
                                                <Link href=''>Edit Profile</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='hereTwo'>
                                        <h1>Recet Order History</h1>
                                        <div className='id flex justify-between'>
                                            <p>Order ID</p>
                                            <p>Date</p>
                                            <p>Total</p>
                                            <p>Status</p>
                                            <p></p>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#738</p>
                                            <p>8 Sep, 2020</p>
                                            <p>$25.00 (1 Product)</p>
                                            <p>on the way</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#703</p>
                                            <p>22 Oct, 2020</p>
                                            <p>$250.00 (4 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#130</p>
                                            <p>1 Feb, 2020</p>
                                            <p>$35.00 (1 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#561</p>
                                            <p>22 Oct, 2020</p>
                                            <p>$250.00 (4 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#536</p>
                                            <p>21 Sep, 2020</p>
                                            <p>$578.00 (13 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>
                                    </div>
                                </>
                            }

                            {active === 'history' &&
                                <>
                                    <div className='history'>
                                        <h1>Order History</h1>
                                        <div className='id flex justify-between'>
                                            <p>Order ID</p>
                                            <p>Date</p>
                                            <p>Total</p>
                                            <p>Status</p>
                                            <p></p>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#738</p>
                                            <p>8 Sep, 2020</p>
                                            <p>$25.00 (1 Product)</p>
                                            <p>on the way</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#703</p>
                                            <p>22 Oct, 2020</p>
                                            <p>$250.00 (4 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#130</p>
                                            <p>1 Feb, 2020</p>
                                            <p>$35.00 (1 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#561</p>
                                            <p>22 Oct, 2020</p>
                                            <p>$250.00 (4 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#536</p>
                                            <p>21 Sep, 2020</p>
                                            <p>$578.00 (13 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#130</p>
                                            <p>1 Feb, 2020</p>
                                            <p>$35.00 (1 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#561</p>
                                            <p>22 Oct, 2020</p>
                                            <p>$250.00 (4 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>

                                        <div className='secId flex justify-between'>
                                            <p>#536</p>
                                            <p>21 Sep, 2020</p>
                                            <p>$578.00 (13 Products)</p>
                                            <p>Completed</p>
                                            <Link href=''>View Details</Link>
                                        </div>
                                    </div>
                                </>
                            }

                            {active === 'cart' &&
                                <>
                                    <h1 className='flex justify-center'>My Shopping Cart</h1>
                                    <div className='shopCart'>
                                        <div className='productsCart'>
                                            <div>
                                                {cart.length === 0 ? (
                                                    <>
                                                    <div className='topEMm flex justify-between'>
                                                        <p className='empty'>Your cart is empty 🛒</p>

                                                        <Link href="/Shop">
                                                            <button className='shop ret'>Return to Shop</button>
                                                        </Link>
                                                    </div>
                                                        </>
                                                ) : (
                                                    <div>
                                                        <div className='title flex justify-around'>
                                                            <h2>PRODUCT</h2>
                                                            <h2>PRICE</h2>
                                                            <h2>QUANTITY</h2>
                                                            <h2>SUBTOTAL</h2>
                                                            <h2></h2>
                                                        </div>
                                                        {cart.map((product) => (
                                                            <div key={product.id}>
                                                                <div className="flex justify-around gap-10 cart-item">
                                                                    <div>
                                                                        <Image src={product.image} width={100} height={100} alt={product.name} />
                                                                        <h3>{product.name}</h3>
                                                                    </div>
                                                                    <div>
                                                                        <p>${product.price}</p>
                                                                    </div>
                                                                    <div className='quantity'>
                                                                        <button onClick={() => decreaseQty(product.id)}>
                                                                            <Image src={minus} alt='' />
                                                                        </button>

                                                                        <span>{product.quantity}</span>

                                                                        <button onClick={() => increaseQty(product.id)}>
                                                                            <Image src={plus} alt='' />
                                                                        </button>
                                                                    </div>
                                                                    <div>
                                                                        ${Number(product.price) * Number(product.quantity || 1)}
                                                                    </div>

                                                                    <button onClick={() => {
                                                                        setCart(cart.filter(item => item.id !== product.id))
                                                                    }}>
                                                                        <Image src={close} alt='' />
                                                                    </button>

                                                                </div>

                                                            </div>
                                                        ))}
                                                        <div className='back'>
                                                            <div>
                                                                <Link href="/Shop">
                                                                    <button className='shop'>Return to Shop</button>
                                                                </Link>
                                                            </div>
                                                            <div>
                                                                <button className='shop' onClick={() => setCart([])}>Update Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className='coupon'>
                                                <h2>Coupon Code</h2>
                                                <div className='flex'>
                                                    <input type="text" placeholder='Enter code' />
                                                    <button className=''>Apply Coupon</button>
                                                </div>
                                            </div>
                                        </div>



                                        <div className='total'>
                                            <h1>
                                                Cart Total
                                            </h1>
                                            <div>
                                                <h2>Subtotal:</h2>
                                                <p>${subtotal.toFixed(2)}</p>
                                            </div>
                                            <div>
                                                <h2>Shipping:</h2>
                                                <p>Free</p>
                                            </div>
                                            <div>
                                                <h2>Total</h2>
                                                <p>${subtotal.toFixed(2)}</p>
                                            </div>
                                            <button className='shop'>
                                                Proceed to checkout</button>
                                        </div>
                                    </div>
                                </>
                            }

                            {active === 'settings' &&
                                <>
                                    <div className='settings'>
                                        <h1>Account Settings</h1>
                                        <div className='first flex justify-between'>
                                            <div className='inputsFi'>
                                                <form>
                                                    <div>
                                                        <label>First Name</label>
                                                        <input
                                                            name="firstName"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            placeholder="First Name"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label>last Name</label>
                                                        <input
                                                            name="lastName"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            placeholder="Last Name"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label>Email</label>
                                                        <input
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Email"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label>Phone Number</label>
                                                        <input
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            placeholder="Phone"
                                                        />
                                                    </div>
                                                    <button className='shop' type="button" onClick={handleSave}>
                                                        Save Changes
                                                    </button>
                                                </form>
                                            </div>
                                            <div className='account'>
                                                <div className='img'>
                                                    <Image src={photo} alt='' />
                                                </div>

                                                <button
                                                >Chose Image</button>
                                            </div>
                                        </div>
                                        <h1>Billing Address</h1>

                                        <div className='inputsSec'>
                                            <form>
                                                <div className='three'>
                                                    <div>
                                                        <label>First Name</label>
                                                        <input
                                                            name="firstName"
                                                            value={formData.firstName}
                                                            onChange={handleChange}
                                                            placeholder="First Name"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label>last Name</label>
                                                        <input
                                                            name="lastName"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            placeholder="Last Name"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label>Company Name (optional)</label>
                                                        <input
                                                            name="Company"
                                                            value={formData.Company}
                                                            onChange={handleChange}
                                                            placeholder="Zakirsoft"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label>Street Address</label>
                                                    <input
                                                        name="Address"
                                                        value={formData.Address}
                                                        onChange={handleChange}
                                                        placeholder="4140 Par|"
                                                    />
                                                </div>
                                                <div className='three'>
                                                    <div>
                                                        <label>Email</label>
                                                        <input
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label>Phone</label>
                                                        <input
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            placeholder="Phone"
                                                        />
                                                    </div>
                                                </div>
                                                <button className='shop'
                                                    type="button" onClick={handleSave}
                                                >Save Changes</button>
                                            </form>
                                        </div>
                                        <h1>Change Password</h1>
                                        <div className='inputsTh'>
                                            <form>
                                                <div>
                                                    <label>Current Password</label>
                                                    <input
                                                        name="current"
                                                        value={passwordData.current}
                                                        onChange={handlePasswordChange}
                                                        placeholder="Current Password"
                                                    />
                                                </div>
                                                <div>
                                                    <div>
                                                        <label>New Password</label>
                                                        <input
                                                            name="password"
                                                            value={passwordData.password}
                                                            onChange={handlePasswordChange}
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label>Confirm Password</label>
                                                        <input
                                                            name="confirm"
                                                            value={passwordData.confirm}
                                                            onChange={handlePasswordChange}
                                                            placeholder="Confirm Password"
                                                        />
                                                    </div>
                                                </div>
                                                <button className='shop'
                                                    type="button" onClick={handlePasswordSave}
                                                >Change Password</button>
                                            </form>
                                        </div>
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
