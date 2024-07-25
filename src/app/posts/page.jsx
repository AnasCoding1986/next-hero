import { getPosts } from '@/Services/postapi';
import Link from 'next/link';
import React from 'react';



const PostPage = async () => {

  const postsData = await getPosts();
  console.log(postsData);
  return (
    <div>
      Post page
      <div className='grid grid-cols-4 gap-5'>
        {
          postsData?.slice(0,10).map(({id,title,body}) => (<div key={id} className='p-4 border-2'>
            <h6>Title: {title}</h6>
            <h6>Description: {body}</h6>
            <button><Link className='bg-orange-400 p-3 rounded-md' href={`/posts/${id}`}>See details</Link></button>
          </div>))
        }
      </div>
    </div>
  );
};

export default PostPage;