import React from 'react';
import '../App.css';

function Card({ actors, genre, rated, released, plot, poster, title }) {

    return (
        <>
            <a href="#movieModal" data-bs-toggle="modal" className="card card-cover overflow-hidden text-bg-dark rounded-2 shadow-lg m-4" style={{ height: 300, width: 200 }}>
                <img src={poster} style={{ height: 300, width: 200 }} />
            </a>

            {/* <!-- Modal --> */}
            <div className="modal modal-sheet fade" id="movieModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header pb-4 border-bottom-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex">
                                <div className="card card-cover overflow-hidden text-bg-dark rounded-2 shadow-lg">
                                    <img src={poster} style={{ height: 150, width: 100 }} />
                                </div>
                                <div>
                                    <h2 className="modal-title fw-bold ms-3" id="exampleModalLabel">{title}</h2>
                                    <p className="ms-3 pb-2">Release Date: {released}</p>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <p className="pb-2">Genre: <strong>{genre}</strong></p>
                                <p className="pb-2">Rating: <strong>{rated}</strong></p>
                                <p className="pb-2">Staring: <strong>{actors}</strong></p>
                                <p className="pb-2">Synopsis: <strong>{plot}</strong></p>
                            </div>
                        </div>
                        <div className="modal-footer border-top-0">
                            <button type="button" className="w-100 btn btn-primary">Watch Trailer</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Card;