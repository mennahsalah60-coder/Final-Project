// "use client";

// import { useRouter } from "next/navigation";
// import { createContext, useContext, useState, ReactNode } from "react";
// import { useFormik } from 'formik'
// import { FormikProps } from "formik";
// import * as Yup from 'yup';
// import { useAuth } from '../components/navbar/AuthContext'

// type SignContextType = {
//     formik: FormikProps<FormValues>;
//     message: string;
//     showAlert: boolean;
// };

// const SignContext = createContext<SignContextType | null>(null);


// export function SignProvider({ children }: { children: ReactNode }) {
//     const [message, setMessage] = useState("");
//     const [showAlert, setShowAlert] = useState(false);

//     const router = useRouter();
//     const { login } = useAuth();

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//         },

//         validationSchema: Yup.object({
//             email: Yup.string().email('Invalid email').required('Required'),
//             password: Yup.string().min(8).required('Required'),
//         }),

//         onSubmit: (values) => {
//             login({
//                 email: values.email,
//                 firstName: values.email.split('@')[0],
//             });

//             setMessage('Logged in successfully!');
//             setShowAlert(true);

//             setTimeout(() => {
//                 setShowAlert(false);
//                 router.push('/home');
//             }, 1000);

//             formik.resetForm();
//         }
//     });
//     return (
//         <SignContext.Provider value={{ formik, message, showAlert }}>
//             {children}
//         </SignContext.Provider>
//     );
// }

// export function useSign() {
//     const context = useContext(SignContext);
//     if (!context) {
//         throw new Error("useSign must be used inside SignProvider");
//     }
//     return context;
// }