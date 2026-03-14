'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import './signup.css'

export default function Page() {
    const [message, setMessage] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters at least')
                .required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')],
                    'Passwords must match')
                    .required('Required')
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
            <div className='form countainer'>
                <h2>Create Account</h2>
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

                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="confirmPassword"
                        placeholder='Confirm Password'
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className='error'>{formik.errors.confirmPassword}</div>
                    ) : null}

                    <div>
                        <input type="radio" name='remember' required />
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