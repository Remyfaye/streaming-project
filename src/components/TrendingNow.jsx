import { movies } from "@/constants";
import React from "react";
import MovieCard from "./MovieCard";

const TrendingNow = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="my-4 font-bold text-xl">Trending now:</h1>

      <div className="flex gap-3 px-2  invisible-scrollbar overflow-scroll">
        {movies.map((item) => (
          <MovieCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
