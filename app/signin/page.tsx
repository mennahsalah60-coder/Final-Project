'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './signin.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from '../components/navbar/AuthContext';
import { FirebaseError } from "firebase/app";

type AppUser = {
    uid: string;
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    Company?: string;
    Address?: string;
};

export default function Page() {
    const router = useRouter();
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
        }),

        onSubmit: async (values, { resetForm }) => {
            try {
                const result = await signInWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );

                const appUser: AppUser = {
                    uid: result.user.uid,
                    email: result.user.email ?? "",
                };

                login(appUser);

                toast.success("Logged in successfully!", {
                    onClose: () => router.push("/home"),
                });

                resetForm();

            } catch (error) {
                const err = error as FirebaseError;

                const errorMessages: Record<string, string> = {
                    "auth/user-not-found": "No account found with this email",
                    "auth/wrong-password": "Incorrect password",
                    "auth/invalid-email": "Invalid email address",
                    "auth/too-many-requests": "Too many attempts, try again later",
                    "auth/invalid-credential": "Email or password is incorrect",
                };

                toast.error(errorMessages[err.code] || "Something went wrong");
            }
        }
    });

    return (
        <section>
            <div className='form-2 countainer'>
                <h2>Sign In</h2>

                <form onSubmit={formik.handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className='error'>{formik.errors.email}</div>
                    )}

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className='error'>{formik.errors.password}</div>
                    )}
                    <div className='forget'>
                        <div className='div-1'>
                            <input type="checkbox" id='rem' />
                            <label htmlFor="rem">Remember me</label>
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
            </div>
        </section>
    )
}