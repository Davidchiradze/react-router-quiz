import React from "react";

const Comments = () => {
  // Placeholder comments data
  const comments = [
    {
      id: 1,
      author: "John Doe",
      content: "Great article! Very informative and well written.",
      timestamp: "2024-01-15 10:30",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Thanks for sharing this. I learned something new today.",
      timestamp: "2024-01-15 14:45",
    },
    {
      id: 3,
      author: "Mike Johnson",
      content:
        "Could you elaborate more on the examples? Would love to see more details.",
      timestamp: "2024-01-16 09:15",
    },
  ];

  return (
    <div className="comments-section">
      <h3>Comments ({comments.length})</h3>

      {comments.length === 0 ? (
        <p className="no-comments">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-timestamp">{comment.timestamp}</span>
              </div>
              <div className="comment-content">{comment.content}</div>
            </div>
          ))}
        </div>
      )}

      <div className="add-comment">
        <h4>Add a Comment</h4>
        <form className="comment-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your name"
              className="comment-input"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Write your comment..."
              rows="3"
              className="comment-textarea"
            />
          </div>
          <button type="submit" className="comment-submit-btn">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
