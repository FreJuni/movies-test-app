import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Singleinfo = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5b08d053101cc3e61e08eae2579237c1&language=en-US`
    );
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (loading) {
    return;
  }

  const {
    budget,
    genres,
    homepage,
    imdb_id,
    original_language,
    original_title,
    popularity,
    production_companies,
    release_date,
    revenue,
    runtime,
    title,
    vote_average,
    poster_path,
  } = data;

  return (
    <div className="single-section-con">
      <div className="section-center">
        <h4>{title || original_title}</h4>
        <div className="single-info-cotainer">
          <div className="img-con">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title}
              className="image"
            />
          </div>
          <div className="information-container">
            <div className="information">
              <h3>Budget :</h3>
              <p>{budget}</p>
            </div>
            <div className="information">
              <h3>Popularity :</h3>
              <p>{popularity}</p>
            </div>
            <div className="information">
              <h3>Home Page :</h3>
              <Link to={homepage}>link to home pages.</Link>
            </div>
            <div className="information">
              <h3>Released_Data :</h3>
              <p>{release_date}</p>
            </div>
            <div className="information">
              <h3>Geners :</h3>
              <div className="genres">
                {genres.map((item, index) => {
                  return <p key={index}>{item.name}</p>;
                })}
              </div>
            </div>
            <div className="information">
              <h3>Original_language :</h3>
              <p>{original_language}</p>
            </div>
            <div className="information">
              <h3>Production_companies :</h3>
              <div className="production">
                {production_companies.map((item, index) => {
                  return <p key={index}>{item.name}</p>;
                })}
              </div>
            </div>
            <div className="information">
              <h3>Revenue :</h3>
              <p>{revenue}</p>
            </div>
            <div className="information">
              <h3>Runtime :</h3>
              <p>{runtime}</p>
            </div>
            <div className="information">
              <h3>IMDB_ID :</h3>
              <p>{imdb_id}</p>
            </div>
            <div className="information">
              <h3>Vote :</h3>
              <p>{vote_average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleinfo;
