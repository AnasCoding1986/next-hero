'use client'
// import React, { useEffect, useState } from 'react';

// const Componentssearchapi = () => {
//     const [search, setSearch] = useState("");
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const loadData = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${search}`);
//             const data = await res.json();
//             if (data && data.id) {
//                 setPosts([data]); // Wrap the single post in an array
//             } else {
//                 setPosts([]); // Handle empty or invalid responses
//             }
//         } catch {
//             console.log("error");
//             setPosts([]);
//         }
//         setLoading(false);
//     }

//     const handler = (e) => {
//         setSearch(e.target.value);
//         console.log(e.target.value);
//     }

//     useEffect(() => {
//         if (search) {
//             loadData();
//         }
//     }, [search]);

//     return (
//         <div>
//             <input onChange={handler} type="text" placeholder='Search' className='p-2 border-none outline-none text-white bg-slate-400' />
//             <button onClick={loadData} className='bg-red-200 p-2'>Search</button>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <div className='mt-12 grid grid-cols-3 gap-3'>
//                     {posts.length > 0 ? (
//                         posts.map((post) => (
//                             <div key={post.id} className='border-2 p-3' >
//                                 <h2>Title: {post.title}</h2>
//                                 <p>Body: {post.body}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No posts found</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Componentssearchapi;

import React, { useState } from 'react';

const Componentsearchapi = () => {

    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const handler = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const loadData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${search}`);
            const data = await res.json();
            if (data && data.id) {
                console.log(data);
                setPosts([data])
            } else {
                setPosts([])
            }

        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const handleClick = () => {
        loadData();
    }

    return (
        <div>
            <div>
                <input onChange={handler} type="text" placeholder='Search' className='text-white p-3 border-none outline-none bg-slate-700' />
                <button onClick={handleClick} className='bg-red-400 p-3'>Search</button>
                {
                    loading ?
                        <div>Data is loading....</div>
                        :
                        (<div className='grid grid-cols-3 gap-3'>
                            {
                                posts.length > 0 ?
                                    (
                                        <div>
                                            {
                                                posts.map(post => <div key={post.id}>
                                                    <h2>title: {post.tite}</h2>
                                                    <p>body: {post.body}</p>
                                                </div>)
                                            }
                                        </div>
                                    )
                                    :
                                    <p>no data found</p>
                            }
                        </div>)
                }
            </div>
        </div>
    );
};

export default Componentsearchapi;

