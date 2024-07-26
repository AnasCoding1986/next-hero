"use client"; // Add this line to make the component a Client Component

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function Navbar() {
    const pathName = usePathname();
    const router = useRouter();

    const handler = () => {
        router.push('/login');
    }

    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/service"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Categories",
            path: "/categories"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "SeaarchApi",
            path: "/SeaarchApi"
        }
    ];

    if (pathName.includes('dashBoard')) 
        return (
    <div className='bg-orange-500 p-5'>
        dashboard layout
    </div>
    )


    return (
        <div>
            <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
                <h6 className='text-lg font-bold'>Logo</h6>
                <ul className='flex space-x-4'>
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link href={link.path}>
                                <span 
                                    className={`${pathName === link.path ? "text-red-500" : ""} hover:text-red-300`} 
                                    aria-current={pathName === link.path ? "page" : undefined}
                                >
                                    {link.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={handler} className='bg-white text-blue-500 px-3 py-1 rounded-lg'>Login</button>
            </nav>
        </div>
    );
}
