import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = ({ addPost }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Please fill in both title and content");
      return;
    }

    // Add the new post
    addPost({
      title: formData.title.trim(),
      content: formData.content.trim(),
    });

    // Reset form
    setFormData({
      title: "",
      content: "",
    });

    // Navigate back to home using useNavigate
    navigate("/");
  };

  return (
    <div className="new-post">
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter post title..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your post content..."
            rows="10"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Create Post
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
