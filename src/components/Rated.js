import React from "react";
import { GlobalContent } from "../context";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Rated = ({ item }) => {
  const { removeItem } = GlobalContent();
  const { id, title, image, date, type } = item;

  const handle = () => {
    removeItem(id);
  };

  return (
    <>
      <article className="single-container">
        {type === "movies" ? (
          <Link to={`/single-info/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${image}`}
              alt={title}
              className="image-con"
            />
          </Link>
        ) : (
          <Link to={`/single-info-series/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${image}`}
              alt={title}
              className="image-con"
            />
          </Link>
        )}

        <div className="single-info-con">
          <h3>{title}</h3>
          <div className="relea-con">
            <button className="rated-btn" onClick={handle}>
              Remove
            </button>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Rated;
