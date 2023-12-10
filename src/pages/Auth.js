import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContent } from "../context";

const Auth = () => {
  const [id, setId] = useState();
  const navigate = useNavigate();
  const { setLogin } = GlobalContent();

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/guest_session/new?&api_key=5b08d053101cc3e61e08eae2579237c1`
    );
    const data = await response.json();
    // console.log(data.guest_session_id);
    const ID = data.guest_session_id;
    setId(data.guest_session_id);
  };

  useEffect(() => {
    getData();
  }, []);

  const handle = () => {
    localStorage.setItem("id", JSON.stringify(id));
    setLogin(false);
    navigate("/");
  };

  return (
    <section className="section-center">
      <div className="auth-container">
        <div className="login-con">
          <h2>Login to see more movies list and tv sereis.</h2>
          <button onClick={handle}>Login</button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
