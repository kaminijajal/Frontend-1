import React, { useState } from 'react'

function PlaylistAdder() {
    const [songName,setSongName] = useState("");
    const [artist,setArtist] = useState("");
    const [playlist,setPlaylist] = useState([]);

    const handleSubmit1 = (event) => {
        event.preventDefault();
        // alert(`${songName} ${artist}`);

        const newSong = {
            songName,
            artist,
        };
       

        setPlaylist([...playlist,newSong]);

        setSongName("");
        setArtist("");

    };

  return (
    < >
        <div style={{display:'flex', gap:30 ,justifyContent:'center'}}>
            <div >
            <form action="" onSubmit={handleSubmit1}>
            <input type="text" style={{padding:10, fontSize:20,margin:20}}
            placeholder='Song name'
            value={songName}
            onChange={(event) => setSongName(event.target.value)}/>
            <br />

            <input type="text" style={{padding:10, fontSize:20 ,margin:20}}
            placeholder='Artist'
            value={artist}
            onChange={(event) => setArtist(event.target.value)}/>
            <br />

            <button type='submit' style={{width:150,margin:20}}>Add song</button>
        </form>

        </div>
        <div>
            <h3>Playlist</h3>

        <ul>
            {playlist.map((item,i)=>
            (
                <li key={i}>
                    {item.songName} - {item.artist}
                </li>
            ))}
        </ul>
        </div>
        
        </div>
        <hr />
    </>
    
  )
}

export default PlaylistAdder