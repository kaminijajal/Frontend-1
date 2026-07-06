import React, { useState } from 'react'
import DownArrowIcon from '@iconify-react/fluent-emoji-flat/down-arrow';
import UpArrowIcon from '@iconify-react/fluent-emoji-flat/up-arrow';
function SongVote() {
    const [votes,setVotes] = useState(0);

    const upvote = () =>{
        setVotes(votes+1);
    };
    const downvote = () =>{
        if(votes>0){
            setVotes(votes-1);
        }
    };
  return (
    <div>
        <span onClick={upvote}><UpArrowIcon height="3em" /></span>
        <p style={{paddingBottom:"10px",fontSize:"30px",paddingTop:"10px",}}>{votes}</p>
        <span onClick={downvote}><DownArrowIcon height="3em" /></span>
        <hr />
    </div>
  )
}

export default SongVote