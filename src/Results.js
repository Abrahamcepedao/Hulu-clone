import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';
import './Results.css'

function Results({ fetchUrl }) {
    const [movies, setMovies] =  useState([]);

    useEffect(() => {
         async function fetchData() {
           const request = await axios.get(fetchUrl);
           setMovies(request.data.results);
           return request;
         }
         fetchData();
    }, [fetchUrl]);

    return (
      <div className="results">
        <FlipMove>
          {movies.map((movie) => (
            <VideoCard key={movie.id} movie={movie} />
          ))}
        </FlipMove>
      </div>
    );
}

export default Results;
