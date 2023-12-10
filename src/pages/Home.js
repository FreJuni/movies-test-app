import { useState } from "react";
import Movies from "../components/Movies";
import TVSeries from "../components/TVSeries";
import { Navigate } from "react-router-dom";

const typeMove = {
  Movies: "movies",
  TvSeries: "tvseries",
};

const Home = () => {
  const [check, setCheck] = useState(typeMove.Movies);

  if (localStorage.getItem("id") === null) {
    return <Navigate to="/auth" />;
  }

  return (
    <section className="section-center">
      <div className="home-container">
        <div className="home-btn-con">
          <ul>
            <li
              className={check === "movies" ? "blue-color" : "undefined"}
              onClick={() => setCheck(typeMove.Movies)}
            >
              Movies
            </li>
            <li
              className={check === "tvseries" ? "blue-colo" : "undefined"}
              onClick={() => setCheck(typeMove.TvSeries)}
            >
              TvSeries
            </li>
          </ul>
        </div>
        <div className="home-tv-con">
          {check === "movies" ? <Movies /> : <TVSeries />}
        </div>
      </div>
    </section>
  );
};

export default Home;
