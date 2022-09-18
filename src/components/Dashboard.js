import React, { useState, useEffect } from "react";
import DashboardNavbar from './DashboardNavbar';
import ErrorBoundry from "./ErrorBoundry";
import CardList from "./CardList";

import { useAuth } from "../lib/firebase";

function Dashboard() {
    const [movies, setMovies] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const currentUser = useAuth();

    useEffect(() => {
        fetch('https://kane-toomer.github.io/Data/movies.json')
            .then(response => response.json())
            .then(movies => { setMovies(movies) });
    }, []);


    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }


    const filteredMovies = movies.filter(movie => {
        return (
            movie.title.toLowerCase().includes(searchfield.toLowerCase())
        );
    })

    return !movies.length ? <h5 className="font-bold text-center mt-5 pt-5">Loading...</h5> : (
        <div className="mb-5">
            {/* Navigation Bar */}
            <DashboardNavbar searchChange={onSearchChange} />

            {/* Who's logged in */}
            <div className="text-center mt-3">Currently logged in as: <span className="font-bold">{currentUser?.email}</span> </div>

            {/* Card List*/}
            <ErrorBoundry>
                {/* Card List */}
                <CardList movies={filteredMovies} />
            </ErrorBoundry>
        </div>
    );
}

export default Dashboard;