
import React from 'react';
import UrlShortener from './UrlShortner';
import UrlList from './UrlList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sub-app'>
        <h1>URL Shortener</h1>
      <UrlShortener />
      <UrlList />
      </div>
    </div>
  );
}

export default App;

