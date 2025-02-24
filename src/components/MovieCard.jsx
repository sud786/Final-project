import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
