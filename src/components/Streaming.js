import React, { useState, useEffect } from "react";
import StreamingNavbar from "./StreamingNavbar";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import CardList from "./CardList";

function Streaming() {
    const [movies, setMovies] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://kane-toomer.github.io/Data/movies.json')
            .then(response => response.json())
            .then(movies => { setMovies(movies) });
    }, []);


    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }


    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !movies.length ? <h5 className="fw-bold text-center mt-5 pt-5">Loading...</h5> : (
        <>
            {/* Navbar */}
            <StreamingNavbar searchChange={onSearchChange} />

            {/* Card List*/}
            <Scroll>
                <ErrorBoundry>
                    {/* Card List */}
                    <CardList movies={filteredMovies} />
                </ErrorBoundry>
            </Scroll>
        </>
    );

}

export default Streaming;