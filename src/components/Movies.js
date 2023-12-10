import React from "react";
import { GlobalContent } from "../context";
import SingleInformation from "./SingleINFO.js";

const Movies = () => {
  const { movies } = GlobalContent();

  return (
    <section className="movies-con">
      <h2>MOVIES</h2>
      <div className="movies">
        {movies &&
          movies.map((item) => {
            return <SingleInformation key={item.id} item={item} />;
          })}
      </div>
    </section>
  );
};

export default Movies;
