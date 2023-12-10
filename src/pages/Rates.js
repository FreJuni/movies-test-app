import React from "react";
import { GlobalContent } from "../context";
import Rated from "../components/Rated";
import { Navigate } from "react-router-dom";
const Rates = () => {
  const { addFav } = GlobalContent();

  const checkId = localStorage.getItem("id") === null;

  if (checkId) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className="section-center">
      <section className="movies-con">
        <h2>Rated</h2>
        <div className="movies">
          {addFav &&
            addFav.map((item) => {
              return <Rated item={item} key={item.id} />;
            })}
        </div>
      </section>
    </div>
  );
};

export default Rates;
