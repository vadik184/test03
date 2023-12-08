import React from 'react';
import {
  List,
  Link,
  Item,
  Img,
  Title,
} from 'components/FilmList/FilmListStyled';

export const FilmList = ({ films }) => {
  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <Link href="">
            <Img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              width={250}
              alt="poster"
            />
            <Title>{film.title || film.name}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
};
