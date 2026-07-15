import React, { useState } from 'react'

function SearchBar() {
    const [search,setSearch] = useState("");
  return (
    <div>
        <h1>SearchBar</h1>
        <input type="text" placeholder='Search Product' value={search}
        onChange={(e) => setSearch(e.target.value)}/>

        <h3>Search Result :</h3>
        <p>{search}</p>
        <hr />
    </div>
  )
}

export default SearchBar