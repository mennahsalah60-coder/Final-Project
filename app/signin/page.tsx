'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import './signin.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useAuth } from '../components/navbar/AuthContext'

export default function Page() {
    const [message, setMessage] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const router = useRouter()
    const { login } = useAuth()

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

            const userData = {
                email: values.email,
                password: values.password,
            }

            login(userData)

            setMessage('Logged in successfully!')
            setShowAlert(true)

            setTimeout(() => {
                setShowAlert(false)
                router.push('/home')
            }, 1000)

            formik.resetForm()
        }
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
                        top: '50%',
                        marginRight: '30px',
                        marginLeft: '-30px',
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '40px 60px',
                        borderRadius: '5px',
                        fontSize: '25px',
                        boxShadow: '0 2px 20px rgba(0,0,0,0.2)'
                    }}>
                        {message}
                    </div>
                )}
            </div>
        </section>
    )
}