import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [type, setType] = useState("Text");

  const onTypeChange = (event) => {
    setType(event.target.value);
  };

  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const onTextChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, text]);
    setText("");
  };
  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  return (
    <div className="App">
      <PostCreate
        handleSubmit={handleSubmit}
        onTextChange={onTextChange}
        text={text}
        onTypeChange={onTypeChange}
        type={type}
      />
      <PostList posts={posts} type={type} setPosts={setPosts} />
    </div>
  );
}

export default App;
