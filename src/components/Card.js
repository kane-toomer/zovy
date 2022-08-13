import React, { useState } from 'react';
import '../App.css';
import { Modal } from 'react-bootstrap';

function Card({ actors, genre, rated, released, plot, poster, title }) {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    // Modal 1
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Modal 2
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <a onClick={handleShow} className='m-4' style={{ height: 300, width: 200 }}>
                <img src={poster} style={{ height: 300, width: 200 }} alt="Poster of movie/show from api" className="card card-cover overflow-hidden text-bg-dark rounded-2 shadow-lg" />
            </a>

            {/* Modal #1 */}
            <Modal show={show} animation={true} className="modal modal-sheet fade" id="movieModal" tabindex="-1" aria-labelledby="movieModal" aria-hidden="true">
                <div className="modal-content">
                    <div className="modal-header pb-4 border-bottom-0">
                        <button type="button" class="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex">
                            <div className="card card-cover overflow-hidden text-bg-dark rounded-2 shadow-lg">
                                <img src={poster} style={{ height: 225, width: 150 }} alt="Poster of movie/show from api" />
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
                        <a onClick={handleShow2} data-bs-toggle="modal" type="button" className="w-100 btn btn-primary">Watch Trailer</a>
                    </div>
                </div>
            </Modal>

            {/* Modal #2 */}
            <Modal show={show2} animation={true} className="modal modal-sheet fade" id="trailerModal" tabindex="-1" aria-labelledby="trailerModal" aria-hidden="true">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={handleClose2}></button>
                    </div>
                    <div className="modal-body pb-4 mb-2">
                        <p className="lead">I have watched this interview a few times and I feel it can be credited to the creation of a lot of start ups and thousands of jobs created as a result. Enjoy.</p>
                        <div className="d-flex justify-content-center">
                            <iframe
                                title="trailer"
                                id="trailer"
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/Lb4IcGF5iTQ"
                                frameborder="0"
                                allowfullscreen
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Card;