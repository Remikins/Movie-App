import React from 'react';

const MovieList = (props) => {
    const FavoriteComponents = props.favoriteComponents;
    return (
        <>
        {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
            <img src = {movie.Poster} alt='movie'></img>
            <div onClick={()=> props.handleFavoritesClick(movie)} className="overlay d-flex align-items-center justify-content">
              <FavoriteComponents/>
            </div>
        </div>
        ))}
        </>
    );
};

export default MovieList;