'use client'
import React, { useEffect, useState } from 'react';

const Componentssearchapi = () => {

    const [search,setSearch] = useState('abong');
    const [posts,setpost] = useState('abong');

    const loadData = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = res.json();
        setpost(data);
    }

    const handler = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    // useEffect(()=>{
    //     loadData();
    // },[search])

    return (
        <div>
            <input onChange={handler} type="text" placeholder='Search' className='p-2 border-none outline-none text-white bg-slate-400' />
            <button className='bg-red-200 p-2'>Search</button>
            <div className='mt-12 grid grid-cols-3 gap-3'>
                {
                    posts?.map((post)=> (
                        <div key={post.id} className='border-2 p-3' >
                            <h2>title: {post.title}</h2>
                            <p>body: {post.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Componentssearchapi;