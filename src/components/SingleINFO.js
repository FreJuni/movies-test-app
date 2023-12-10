import React from "react";
import { Link } from "react-router-dom";
import { GlobalContent } from "../context";

const SingleMovies = ({ item }) => {
  const { addToFavourite } = GlobalContent();
  const { id, title, image, date, type } = item;

  const handle = () => {
    addToFavourite(id, type);
  };

  return (
    <article className="single-container">
      <Link to={`/single-info/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt={title}
          className="image-con"
        />
      </Link>
      <div className="single-info-con">
        <h3>{title}</h3>
        <div className="relea-con">
          <button className="rated-btn" onClick={handle}>
            Rated
          </button>
          <p>{date}</p>
        </div>
      </div>
    </article>
  );
};

export default SingleMovies;
