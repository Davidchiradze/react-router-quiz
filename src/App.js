import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home.js";
import PostDetail from "./components/PostDetail.js";
import NewPost from "./components/NewPost.js";
import Comments from "./components/Comments.js";
import NotFound from "./components/NotFound.js";

function App() {
  // Initial blog posts state
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      content:
        "React is a powerful JavaScript library for building user interfaces. It allows you to create reusable components and manage state efficiently.",
    },
    {
      id: 2,
      title: "Understanding React Router",
      content:
        "React Router is the standard routing library for React applications. It enables you to create single-page applications with navigation between different components.",
    },
    {
      id: 3,
      title: "State Management in React",
      content:
        "State management is crucial in React applications. You can use useState for local state and context or external libraries for global state management.",
    },
  ]);

  // Function to add new post
  const addPost = (newPost) => {
    const post = {
      ...newPost,
      id: posts.length + 1,
    };
    setPosts([...posts, post]);
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Menu */}
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/">My Blog</Link>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new-post"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/posts/:postId" element={<PostDetail posts={posts} />}>
              <Route path="comments" element={<Comments />} />
            </Route>
            <Route path="/new-post" element={<NewPost addPost={addPost} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
