import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Error!!! sorry page not found</h3>
            <h1>404</h1>
            <Link to="/">Back To Home</Link>
        </div>
    );
};

export default NotFound;