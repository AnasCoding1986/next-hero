import React from 'react';

const searchapi = () => {
    return (
        <div>
            <input type="text" placeholder='Search' className='p-2 border-none outline-none text-white bg-slate-400' />
            <button className='bg-red-200 p-2'>Search</button>
        </div>
    );
};

export default searchapi;