import React from 'react';
import '../App.css';

function Card({ actors, genre, rated, released, plot, poster, title }) {

    return (
        <>
            <a href="#movieModal" data-bs-toggle="modal" className='m-4' style={{ height: 300, width: 200 }}>
                <img src={poster} style={{ height: 300, width: 200 }} className="card card-cover overflow-hidden text-bg-dark rounded-2 shadow-lg" />
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
                                    <img src={poster} style={{ height: 225, width: 150 }} />
                                </div>
                                <div>
                                    <h2 className="modal-title fw-bold ms-3 mb-3" id="exampleModalLabel">{title}</h2>
                                    <p className="ms-3"><strong>Release Date:</strong> {released}</p>
                                    <p className="ms-3"><strong>Genre:</strong> {genre}</p>
                                    <p className="ms-3"><strong>Rating:</strong> {rated}</p>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <p className="pb-2"><strong>Staring:</strong> {actors}</p>
                                <p className="pb-2"><strong>Synopsis: </strong> {plot}</p>
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