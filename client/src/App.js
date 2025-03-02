import React from "react";
import PostCreateComponent from "./components/post/PostCreate.component";
import PostListComponent from "./components/post/PostList.component";
const App = () => {
  return (
    <div>
      <h1 className="text-center">Blog App</h1>

      <div className="container">
        <h2>Create Post</h2>
        <PostCreateComponent />
      </div>
      <hr />
      <div className="container">
        <PostListComponent />
      </div>
    </div>
  );
};

export default App;
