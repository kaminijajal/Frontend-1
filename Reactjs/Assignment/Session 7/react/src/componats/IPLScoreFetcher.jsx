import React, { useEffect, useState } from "react";

function IPLScoreFetcher() {
  const [headline, setHeadline] = useState("Loading...");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setHeadline(data[0].title);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setHeadline("Failed to load match headline.");
      });
  }, []);

  return (
    <div>
      <h2>IPL Live Match</h2>
      <p>
        <strong>Match Headline:</strong> {headline}
      </p>
      <hr />
    </div>
  );
}

export default IPLScoreFetcher;