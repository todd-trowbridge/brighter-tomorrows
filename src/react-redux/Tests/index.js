import React from 'react'

function Tests() {
  const fetchHTTPS = () => {
    // let url = `www.omdbapi.com/?apikey=${key}=`;
    let url = "https://jsonplaceholder.typicode.com/todos/"
    // fetch(encodeURI(url + searchTerm))
    fetch(encodeURI(url))
      .then((res) => res.json())
      .then((data) => {
        // setMovies(data.Search);
        console.log(data)
      });
  };
  return (
    <div>
      <h1>Tests</h1>
      {fetchHTTPS()}
    </div>
  )
}

export default Tests
