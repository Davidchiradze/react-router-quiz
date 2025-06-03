import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="home-link">
            ← Go Back Home
          </Link>
          <Link to="/new-post" className="create-link">
            Create New Post
          </Link>
        </div>

        <div className="helpful-links">
          <h3>You might be looking for:</h3>
          <ul>
            <li>
              <Link to="/">Home - View all blog posts</Link>
            </li>
            <li>
              <Link to="/new-post">Create a new blog post</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
