import React from 'react';
import Card from './Card';

function CardList({ movies }) {
    const cardArray = movies.map((movie, i) => {
        return (
            <Card
                key={i}
                id={movies[i].id}
                actors={movies[i].actors}
                genre={movies[i].genre}
                rated={movies[i].rated}
                released={movies[i].released}
                plot={movies[i].plot}
                poster={movies[i].poster}
                title={movies[i].title}
            />
        );
    })

    return (
        <div className='row'>
            {cardArray}
        </div>
    );
}

export default CardList