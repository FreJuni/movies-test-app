import React, { useContext, useEffect, useState } from "react";

const AppProvider = React.createContext();

export const AppContent = ({ children }) => {
  const getBackfromLocalStorage = () => {
    const LOCAL = localStorage.getItem("List")
      ? JSON.parse(localStorage.getItem("List"))
      : [];

    return LOCAL;
  };

  const [login, setLogin] = useState(false);
  const [movies, setMovies] = useState([]);
  const [series, setSereis] = useState([]);
  const [addFav, setAddFav] = useState(getBackfromLocalStorage());

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=5b08d053101cc3e61e08eae2579237c1&language=en-US&page=1`
    );
    const data = await response.json();

    if (data.results) {
      const Results = data.results.map((item) => {
        const { id, original_title, poster_path, release_date } = item;
        return {
          id: id,
          title: original_title,
          image: poster_path,
          data: release_date,
          type: "movies",
        };
      });

      setMovies(Results);
    }
  };

  const GetData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=5b08d053101cc3e61e08eae2579237c1&language=en-US&page=1`
    );
    const data = await response.json();
    if (data.results) {
      const Results = data.results.map((item) => {
        const { first_air_date, name, original_name, poster_path, id } = item;
        return {
          id: id,
          title: original_name || name,
          image: poster_path,
          date: first_air_date,
          type: "series",
        };
      });

      setSereis(Results);
    }
  };

  useEffect(() => {
    getData();
    GetData();
  }, []);

  const addToFavourite = (id, type) => {
    const existed = addFav.find((item) => item.id === id);

    let Local;
    if (existed) {
      return;
    } else {
      if (type === "movies") {
        const FilterFav = movies.find((item) => item.id === id);
        Local = [...addFav, FilterFav];
        setAddFav(Local);
      } else {
        const FIlterS = series.find((item) => item.id === id);
        Local = [...addFav, FIlterS];
        setAddFav(Local);
      }

      localStorage.setItem("List", JSON.stringify(Local));
    }
  };

  const removeItem = (id) => {
    const Remove = addFav.filter((item) => item.id !== id);
    const removeIitem = JSON.parse(localStorage.getItem("List"));
    let Item;
    if (removeIitem) {
      Item = removeIitem.filter((item) => {
        return item.id !== id;
      });
      localStorage.setItem("List", JSON.stringify(Item));
    }
    setAddFav(Remove);
  };

  return (
    <AppProvider.Provider
      value={{
        setLogin,
        login,
        movies,
        series,
        addToFavourite,
        removeItem,
        addFav,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export const GlobalContent = () => {
  return useContext(AppProvider);
};
