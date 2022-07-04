import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="section">
      <h2 className="title">Error</h2>
      <p>Oops! The page does not exist.</p>
      <Link className="btn-home" to="/">Home Page</Link>
    </div>
  )
}

export default Error;