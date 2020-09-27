import React from 'react';
import './App.css';
import Row from './Row';
import requests from "./requests";
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetfixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Commedy Movies" fetchUrl={requests.fectchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fectchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fectchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fectchDocumentariesMovies} />
    </div>
  );
}

export default App;
