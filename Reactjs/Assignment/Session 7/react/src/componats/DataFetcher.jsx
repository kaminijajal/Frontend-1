import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <button>Load Data</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}><b>{post.title}</b></li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;