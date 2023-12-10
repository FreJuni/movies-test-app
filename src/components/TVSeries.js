import React from "react";
import { GlobalContent } from "../context";
import SingleInformation from "./SingleINFO.js";

const TVSeries = () => {
  const { series } = GlobalContent();

  return (
    <section className="movies-con">
      <h2>TV Series</h2>
      <div className="movies">
        {series &&
          series.map((item) => {
            return <SingleInformation item={item} key={item.id} />;
          })}
      </div>
    </section>
  );
};

export default TVSeries;
