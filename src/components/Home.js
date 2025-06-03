import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ posts }) => {
  const navigate = useNavigate();

  const handlePostClick = (post) => {
    // Navigate to post detail with state for requirement 5
    navigate(`/posts/${post.id}`, {
      state: {
        post: post,
      },
    });
  };

  return (
    <div className="home">
      <h1>Welcome to My Blog</h1>
      <p>Discover amazing articles and share your thoughts!</p>

      {/* Search functionality - Bonus feature */}

      <div className="posts-list">
        {posts.length === 0 ? (
          <p>
            No posts yet. <Link to="/new-post">Create your first post!</Link>
          </p>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <h3>
                  <Link
                    to={`/posts/${post.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePostClick(post);
                    }}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="post-preview">
                  {post.content.substring(0, 100)}...
                </p>
                <div className="post-actions">
                  <button
                    onClick={() => handlePostClick(post)}
                    className="read-more-btn"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
