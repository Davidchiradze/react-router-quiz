import React from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";

const PostDetail = ({ posts }) => {
  const { postId } = useParams();
  const location = useLocation();

  // Try to get post from location state first (requirement 5)
  // Fallback to finding post by ID from posts array
  let post = location.state?.post;

  if (!post) {
    post = posts.find((p) => p.id === parseInt(postId));
  }

  if (!post) {
    return (
      <div className="post-detail">
        <h1>Post Not Found</h1>
        <p>The requested post could not be found.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <div className="post-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <h1>{post.title}</h1>
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>

      <div className="post-navigation">
        {/* Nested route outlet for comments */}
        <div className="nested-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
