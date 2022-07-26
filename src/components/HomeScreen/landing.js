import React from 'react';

import '../../App.css';

function Landing() {

    return (
        <>
            {/* Jumbotron */}
            <section className="jumbotron p-4" id="header">
                {/* Navigation Bar */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand text-white fw-bold" href="#">Zovy</a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link fw-bold active text-white" aria-current="page" href="#">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container p-5">
                    <div className="px-4 py-5 my-5 text-center">
                        {/* <img className="d-block mx-auto mb-4" src="" alt="logo" width="72" height="57" /> */}
                        <div className="col-lg-6 mx-auto">
                            <h1 className="display-5 fw-bold lh-1 mx-auto text-white mb-4">A Video Vault of 80's & 90's Classics</h1>
                            <p className="lead mb-5 text-white fw-normal">Someone said the best things in life are free... So, you can watch all of your favorites for free!</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-primary btn-lg px-4">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MOVIES - Call to Action */}
            <section className="jumbotron p-5" id="movie-jumbotron">
                <div className="container p-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-6 ">
                                <h1 className="display-5 fw-bold lh-1 mx-auto text-white mb-4">The movies you love</h1>
                                <p className="lead mb-5 text-white fw-normal">Fall in love with familiar favorites all over again in a growing collection right here on Zovy.</p>
                                <button type="button" className="btn btn-primary btn-lg px-4">Get Started</button>
                            </div>
                        </div>
                        <div className="row">


                        </div>
                    </div>
                </div>
            </section>

            {/* SHOWS - Call to Action */}
            <section className="jumbotron p-5" id="shows-jumbotron">
                <div className="container p-5">
                    <div className="container p-lg-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="display-6 fw-semibold mx-auto lh-1 text-white mb-4">Family time like it's 1995</h1>
                                <p className="lead mb-5 text-white fw-normal">The best time is family time. What better way to spend it than to show the new generation the greatest the 80's and 90's had to offer!</p>
                                <button type="button" className="btn btn-primary btn-lg px-4">Get Started</button>
                            </div>
                        </div>
                        <div className="row">
                            {/* MOVIE POSTERS GRID */}
                        </div>
                    </div>
                </div>
            </section>

            {/* WAYS TO WATCH - Call to Action */}
            <section className="jumbotron" style={{ backgroundColor: 'purple' }}>
                <div className="container p-5" style={{ backgroundColor: 'green' }}>
                    <div className="container p-5" style={{ backgroundColor: 'orange' }}>
                        <div className="row">
                            <div className="col-lg-6 ">
                                <h1 className="display-5 fw-bold lh-1 mx-auto text-white mb-4">Headline Text</h1>
                                <p className="lead mb-5 text-white fw-normal">Subtext</p>
                                <button type="button" className="btn btn-primary btn-lg px-4">Get Started</button>
                            </div>
                        </div>
                        <div className="row">
                            {/* MOVIE POSTERS GRID */}
                        </div>
                    </div>
                </div>
            </section>

            {/*  LAST Call to Action */}
            <section className="jumbotron" id="header">
                <div className="container p-5">
                    <div className="container p-5 glass-card">
                        <div className="row">
                            <div className="col-lg-6 mx-auto text-center">
                                <h1 className="display-5 fw-bold lh-1 mx-auto text-white mb-4">A Video Vault of 80's & 90's Classics</h1>
                                <p className="lead mb-5 text-white fw-normal">Stream all of your favorites for free!</p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                                    <button type="button" className="btn btn-lg btn-primary">Get Started</button>
                                </div>
                                <a href="#" className="text-white fw-semibold">Already have an account? Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">

                        <span class="mb-3 mb-md-0 text-muted">© 2022 Kane Toomer</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                Web Icon
                            </a>
                        </li>
                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                LinkedIn Icon
                            </a>
                        </li>
                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                Github Icon
                            </a>
                        </li>

                    </ul>
                </footer>
            </div>
        </>
    );
}

export default Landing;