'use client'

import { useAuth } from '../navbar/AuthContext';
import { useRouter } from 'next/navigation';
import './complete.css'

export default function CompleteProfile() {
    const { user } = useAuth();
    const router = useRouter();

    const isProfileComplete =
        user?.firstName &&
        user?.lastName &&
        user?.email &&
        user?.Address;

    if (!user || isProfileComplete) return null;

    return (
        <div className="complete-alert countainer">
            <p>Please complete your account information</p>

            <button className='shop' onClick={() => router.push('/profile')}>
                Go to Profile
            </button>
        </div>
    );
}