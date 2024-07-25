import { postDetails } from '@/Services/postapi';
import React from 'react';



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