import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function RegistrationSuccess() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/user/login')
        }, 5000);
    }, []);
    return (
        <div>
            <div className='register-completed'>
                <div className="success-card text-center">
                    <div className='register-success'>
                        <i className="checkmark">✓</i>
                    </div>
                    <h1>Success</h1>
                    <p>Thank you for Register <strong>KidzUni</strong><br /> We'll redirect to login page in 5 seconds!</p>
                </div>
            </div>
        </div>
    )
}
