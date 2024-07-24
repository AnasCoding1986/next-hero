import React from 'react';

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data
}

const PostPage = async () => {

  const postsData = await getPosts();
  console.log(postsData);
  return (
    <div>
      Post page
      <div className='grid grid-cols-4 gap-5'>
        {
          postsData?.map(postData => )
        }
      </div>
    </div>
  );
};

export default PostPage;