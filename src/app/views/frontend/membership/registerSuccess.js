import React from 'react'
import "../assets/css/style.css";

export default function RegisterSuccess() {
    return (
        <div>
            <div className='register-completed'>
                <div className="success-card text-center">
                    <div className='register-success'>
                        <i className="checkmark">✓</i>
                    </div>
                    <h1>Success</h1>
                    <p>Thank you for Register <strong>KidzUni</strong><br /> We'll redirect to login page in 3 seconds!</p>
                </div>
            </div>
        </div>
    )
} 