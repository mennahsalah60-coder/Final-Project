'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import './signup.css'
import { useAuth } from '../components/navbar/AuthContext'
import { toast } from 'react-toastify';


export default function Page() {
    const router = useRouter()
    const { login } = useAuth()
    const notify = () => {
        toast.success('Signed Up successfully!', {
            onClose: () => {
                router.push('/home');
            }
        });
    };


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

            const userData = {
                email: values.email
            }

            login(userData)
            notify()
            
            formik.resetForm()
        }
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

                    <div className='remember'>
                        <input type="radio"  id="remember" name='remember' required />
                        <label className='rem' htmlFor="remember">Accept all terms & Conditions</label>
                    </div>

                    <button type="submit">Create Account</button>
                </form>

                <p>
                    Already have account <Link href="/signin">Login</Link>
                </p>
            </div>
        </section>
    )
}