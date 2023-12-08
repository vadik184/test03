import React, { useEffect, useState } from 'react';
import { FilmList } from 'components/FilmList/FilmList';
import { getTrending } from 'components/API/API';
// import { StyledApp } from 'components/AppStyle';
// import { LoadMoreBtn } from 'components/Button/Button';
// import { findImages } from 'components/Api/pixabay';

export const App = () => {
  const [films, setFilms] = useState([]);
  // const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const trendingFilms = await getTrending();
        setFilms(trendingFilms.results);
      } catch (error) {
        console.error(error.massage);
      }
    };
    fetchFilms();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <FilmList films={films} />
    </>
  );
};
