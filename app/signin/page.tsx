'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import './signin.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';

export default function Page() {
    const [message, setMessage] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters at least')
                .required('Required'),
        }),
        onSubmit: values => {
            const fakeToken = '123456'

            localStorage.setItem('token', fakeToken)

            setMessage('Logged in successfully!')
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false)
                router.push('/home')
            }, 3000)
            console.log(values)
            formik.resetForm()
        },
    });

    return (
        <section>
            <div className='form-2 countainer'>
                <h2>Sign In</h2>

                <form onSubmit={formik.handleSubmit}>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='error'>{formik.errors.email}</div>
                    ) : null}
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='Password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className='error'>{formik.errors.password}</div>
                    ) : null}

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