import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center not-found'>
            <h4>Sorry! Page not found.</h4>
            <h6 className='text-danger'>Error 404</h6>
        </div>
    );
};

export default NotFound;