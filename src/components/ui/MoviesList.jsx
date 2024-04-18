import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
  return (
    <section className="flex gap-2 py-5 container-box h-400px overflow-x-scroll movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </section>
  );
}

export default MoviesList;