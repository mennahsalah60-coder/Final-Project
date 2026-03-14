'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import './signin.css'

export default function Page() {
    const [message, setMessage] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const router = useRouter()

    const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
        const fakeToken = '123456'
        e.preventDefault()

        localStorage.setItem('token', fakeToken)

        setMessage('Logged in successfully!')
        setShowAlert(true)

        setTimeout(() => {
            setShowAlert(false)
            router.push('/home')
        }, 3000)
    }

    return (
        <section>
            <div className='form-2 countainer'>
                <h2>Sign In</h2>

                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />

                    <div>
                        <div>
                            <input type="radio" required />
                            <p>Remember me</p>
                        </div>
                        <div>
                            <Link href='#'>Forget Password</Link>
                        </div>
                    </div>

                    <button type="submit">Login</button>
                </form>

                <p>
                    Don’t have account? <Link href="/signup">Register</Link>
                </p>
                {showAlert && (
                    <div style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}>
                        {message}
                    </div>
                )}
            </div>
        </section>
    )
}