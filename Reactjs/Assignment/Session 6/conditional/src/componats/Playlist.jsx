import React from "react";

function Playlist() {

    const songs = [
    { title: "Shape of You", artist: "Ed Sheeran" },
    { title: "Believer", artist: "Imagine Dragons" },
    { title: "Perfect", artist: "Ed Sheeran" },
  ];

  return(
  <div>
    <h2 style={{marginTop:20}}>Playlist</h2>

    <ul>
      {songs.map((item, i) => (
          <li key={i}>
            {item.title} - {item.artist}
            
          </li>
        ))}
    </ul>
    <br />
    <hr />
  </div>
  )
}

export default Playlist;
