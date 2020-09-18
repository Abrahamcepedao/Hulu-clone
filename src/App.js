import React, { useState } from 'react';
import Header from'./Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';
import './App.css';

function App() {
  const [fetchUrl, setFetchUrl] = useState(requests.fetchTrending);
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* nav */}
      <Nav setSelectedOption={setFetchUrl} />
      {/* results */}
      <Results fetchUrl={fetchUrl} />
    </div>
  );
}

export default App;
