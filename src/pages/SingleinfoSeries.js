import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleinfoSeries = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=5b08d053101cc3e61e08eae2579237c1&language=en-US`
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
    first_air_date,
    genres,
    homepage,
    last_air_date,
    networks,
    original_language,
    original_name,
    popularity,
    poster_path,
    production_companies,
    seasons,
    vote_average,
    name,
    vote_count,
  } = data;

  return (
    <div className="single-section-con">
      <div className="section-center">
        <h4>{original_name || name}</h4>
        <div className="single-info-cotainer">
          <div className="img-con">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={name}
              className="image"
            />
          </div>
          <div className="information-container">
            <div className="information">
              <h3>Networks : </h3>
              <img
                src={`https://image.tmdb.org/t/p/original/${networks[0].logo_path}`}
                alt="networks"
                className="networks-img"
              />
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
              <p>{first_air_date}</p>
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
              <h3>Last_Air_Data :</h3>
              <p>{last_air_date}</p>
            </div>
            <div className="information">
              <h3>Seasons :</h3>
              <div className="season-con">
                {seasons.map((item, index) => {
                  const { episode_count, name } = item;
                  return (
                    <div
                      key={index}
                      className="season-info"
                      onClick={() => setShow(!show)}
                    >
                      <p>
                        {show ? (
                          <i className="ri-arrow-down-s-fill"></i>
                        ) : (
                          <i className="ri-arrow-right-s-fill"></i>
                        )}
                        {name}
                      </p>
                      {show ? <p>Episodes : {episode_count}</p> : []}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="information">
              <h3>VoteCount :</h3>
              <p>{vote_count}</p>
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

export default SingleinfoSeries;
