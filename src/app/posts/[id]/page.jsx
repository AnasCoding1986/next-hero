import { postDetails } from '@/Services/postapi';
import React from 'react';

export const generateMetadata = async ({params}) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${search}`);
    const postDetails = await res.json()

    return {
        title: `Post Details ${postDetails.id}`,
        description: `${postDetails.body}`
      }
}



const PostDetails = async ({params}) => {

    const {title,body} = await postDetails(params.id)

    return (
        <div>
            <h2>title: {title}</h2>
            <h2>body: {body}</h2>
        </div>
    );
};

export default PostDetails;