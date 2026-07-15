import React, { useEffect } from "react";

function TrendingSongs() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <div>
      <h2>Trending Songs</h2>
      <p>Check out the latest trending songs!</p>
      <hr />
    </div>
  );
}

export default TrendingSongs;