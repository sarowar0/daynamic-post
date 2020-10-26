import React, { useEffect, useState } from 'react';
import './Comment.css';
const Comments = (props) => {
    const id = props.id;

    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
    useEffect(() => {
        const url = 'https://randomuser.me/api';
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }, [])
    console.log(users);
    return (
        <div className='posts-comments'>
            <h5 className='my-2'>Comments</h5>
            {
                comments.map((comment) => <div className='comments'>
                    {
                        users.map((user) => <img src={user.picture.medium} alt="" />)
                    }
                    <div className="comment-content">
                        <h6>{comment.email}</h6>
                        <p><small>{comment.body}</small></p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Comments;