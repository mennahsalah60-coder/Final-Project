'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import './signup.css'

export default function Page() {
    const [message, setMessage] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const router = useRouter()

    const handleLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('clicked')
        const fakeToken = ''

        localStorage.setItem('token', fakeToken)

        setMessage('Account created successfully!')
        setShowAlert(true)

        setTimeout(() => {
            setShowAlert(false)
            router.push('/home')
        }, 3000)
    }

    return (
        <section>
            <div className='form countainer'>
                <h2>Create Account</h2>

                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />

                    <div>
                        <input type="radio" required />
                        <p>Accept all terms & Conditions</p>
                    </div>

                    <button type="submit">Create Account</button>
                </form>

                <p>
                    Already have account <Link href="/signin">Login</Link>
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