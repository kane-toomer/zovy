import React from 'react';

import '../App.css';

import poster3 from '../assets/terminator.svg';

function Card() {

    return (
        <>
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" className="card card-cover overflow-hidden text-bg-dark rounded-2 shadow-lg" style={{ height: 300, width: 200 }}>
                <img src={poster3} />
            </a>


            {/* <!-- Modal --> */}
            <div className="modal modal-sheet fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header pb-4 border-bottom-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex">
                                <div className="card card-cover overflow-hidden text-bg-dark rounded-2 shadow-lg" style={{ height: 150, width: 100 }}>
                                    <img src={poster3} />
                                </div>
                                <div>
                                    <h2 className="modal-title fw-bold ms-3" id="exampleModalLabel">Movie Title</h2>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <p className="pb-2">Genre: </p>
                                <p className="pb-2">Rating: </p>
                                <p className="pb-2">Synopsis: </p>
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