'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import './signup.css'
import { useAuth } from '../components/navbar/AuthContext'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";

export default function Page() {
    const router = useRouter()
    const { login } = useAuth()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),

            password: Yup.string()
                .min(8, 'Must be 8 characters at least')
                .required('Required'),

            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Required'),
        }),

        onSubmit: async (values, { resetForm }) => {
            try {
                const result = await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );

                login(result.user);

                toast.success("Account created successfully!", {
                    onClose: () => router.push("/home"),
                });

                resetForm();

            } catch (error: unknown) {
                const err = error as FirebaseError;

                console.log(err.code);

                const errorMessages: Record<string, string> = {
                    "auth/email-already-in-use": "Email already exists",
                    "auth/invalid-email": "Invalid email address",
                    "auth/weak-password": "Password is too weak",
                    "auth/user-not-found": "No account found with this email",
                    "auth/wrong-password": "Incorrect password",
                    "auth/invalid-credential": "Email or password is incorrect",
                    "auth/too-many-requests": "Too many attempts, try again later",
                };

                toast.error(errorMessages[err.code] || "Something went wrong");
                return;

            }
        }
    });

    return (
        <section>
            <div className='form countainer'>
                <h2>Create Account</h2>

                <form onSubmit={formik.handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <div className='error'>{formik.errors.email}</div>
                    )}

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <div className='error'>{formik.errors.password}</div>
                    )}

                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <div className='error'>{formik.errors.confirmPassword}</div>
                    )}

                    <div className='remember'>
                        <input type="checkbox" id="remember" required />
                        <label htmlFor="remember">Accept all terms & Conditions</label>
                    </div>

                    <button type="submit">Create Account</button>
                </form>

                <p>
                    Already have account? <Link href="/signin">Login</Link>
                </p>
            </div>
        </section>
    )
}