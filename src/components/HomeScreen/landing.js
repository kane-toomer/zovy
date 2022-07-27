import React from 'react';

import '../../App.css';

import poster1  from '../../assets/bevHillsCop.svg';
import poster2  from '../../assets/goodfellas.svg';
import poster3  from '../../assets/terminator.svg';
import poster4  from '../../assets/pulpfiction.svg';
import poster5 from '../../assets/friends.svg';
import poster6  from '../../assets/heman.svg';
import poster7 from '../../assets/inLivingColor.svg';
import poster8  from '../../assets/cheers.svg';

function Landing() {

    return (
        <>
            {/* Jumbotron */}
            <section className="p-4" id="header">
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
                                <button type="button" className="btn btn-primary btn-lg py-3 px-5">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MOVIES - Call to Action */}
            <div className="container col-xxl-8 px-4 py-5 my-5 rounded-4" id="movie-jumbotron">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6"></div>
                    <div className="col-lg-6 pt-5">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">The movies you love</h1>
                        <p className="lead text-white">Fall in love with familiar favorites all over again in a growing collection right here on Zovy.</p>
                        <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 py-3 me-md-2 mt-3">Sign Up, it's free!</button>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center g-5 pt-5 mt-5'>
                    <div className='col-3 d-none d-md-block'>
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster1} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster2} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster3} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster4} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SHOWS - Call to Action */}
            <div className="container col-xxl-8 px-4 py-5 my-5 rounded-4" id="shows-jumbotron">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6"></div>
                    <div className="col-lg-6 pt-5">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Family time like it's 1995</h1>
                        <p className="lead text-white">The best time is family time. Watch all of your family favorites right here on Zovy.</p>
                        <div class="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 py-3 me-md-2 mt-3">Sign Up, it's free!</button>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center g-5 pt-5 mt-5'>
                    <div className='col-3 d-none d-md-block'>
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster5} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster6} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster7} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster8} />
                        </div>
                    </div>
                </div>
            </div>

            {/* WAYS TO WATCH - Call to Action */}
            

            {/*  LAST Call to Action */}
            

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