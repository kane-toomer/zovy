import React from 'react';

function Landing() {

    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand ps-5" href="#">Zovy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active pe-5" aria-current="page" href="#">Sign In</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* Jumbotron */}
            <section className="jumbotron p-5" style={{ backgroundColor: 'yellow' }}>
                <div className="container p-5" style={{ backgroundColor: 'red' }}>
                    <div className="container p-5" style={{ backgroundColor: 'blue' }}>
                        <div className="row">
                            <div className="col text-center">
                                <h1 className="my-5">Zovy</h1>
                                <h1 className="mt-5 mb-4">The BEST OF THE 80's & 90'S ALL IN ONE PLACE</h1>
                                <p>The best things in life are free... So are we!</p>
                                <button className="btn btn-lg btn-primary my-5">Get Started for Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MOVIES - Call to Action */}
            <section className="jumbotron" style={{ backgroundColor: 'purple' }}>
                <div className="container p-5" style={{ backgroundColor: 'green' }}>
                    <div className="container p-5" style={{ backgroundColor: 'orange' }}>
                        <div className="row">
                            <div className="col">
                                <h2 className="mt-5 mb-3">Movies Headline Text</h2>
                                <h6>subtext</h6>
                                <button className="btn btn-lg btn-primary my-5">Get Started</button>
                            </div>
                        </div>
                        <div className="row">
                            {/* MOVIE POSTERS GRID */}
                        </div>
                    </div>
                </div>
            </section>

            {/* SHOWS - Call to Action */}
            <section className="jumbotron" style={{ backgroundColor: 'purple' }}>
                <div className="container p-5" style={{ backgroundColor: 'green' }}>
                    <div className="container p-5" style={{ backgroundColor: 'orange' }}>
                        <div className="row">
                            <div className="col">
                                <h2 className="mt-5 mb-3">Movies Headline Text</h2>
                                <h6>subtext</h6>
                                <button className="btn btn-lg btn-primary my-5">Get Started</button>
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
                            <div className="col">
                                <h2 className="mt-5 mb-3">Movies Headline Text</h2>
                                <h6>subtext</h6>
                                <button className="btn btn-lg btn-primary my-5">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  LAST Call to Action */}
            <section className="jumbotron" style={{ backgroundColor: 'purple' }}>
                <div className="container p-5" style={{ backgroundColor: 'green' }}>
                    <div className="container p-5" style={{ backgroundColor: 'orange' }}>
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="mt-5 mb-3">Headline Text</h2>
                                <h6 className="mb-5">subtext</h6>
                                <p>The best things in life are free... So are we!</p>
                                <button className="btn btn-lg btn-primary my-3">Get Started for Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
        </>
    );
}

export default Landing;