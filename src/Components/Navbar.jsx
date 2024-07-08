import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className='flex justify-between items-center'>
                <h6>Logo</h6>
                <ul className='flex justify-center items-center space-x-4'>
                    <li>about</li>
                    <li>service</li>
                    <li>contact</li>
                    <li></li>
                </ul>
            </nav>
        </div>
    )
}
