import React from 'react';

import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faTv, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXbox, faPlaystation, faApple, faAndroid,   } from '@fortawesome/free-brands-svg-icons';

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
            <section className="container-fluid p-4" id="header1">
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
                <div className="container p-5 mt-5">
                    <div class="row align-items-center g-5 py-5">
                        <div class="col-12 col-lg-7">
                            <h1 className="display-2 fw-bold lh-2 mb-4">A Video Vault of 80's and 90's Classics</h1>
                            <p className="lead mb-5 fw-normal">Someone said the best things in life are free... Stream all of your 80's and 90's classics on Zovy. Unlimited titles, unlimted devices and all commercial free! </p>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-danger btn-lg py-3 px-5">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MOVIES - Call to Action */}
            <div className="container col-xxl-8 px-4 py-5 my-5 rounded-4" id="movie-jumbotron">
                <div className="row g-5 py-5">
                    <div className="col-lg-6 pt-5">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">The movies you love</h1>
                        <p className="lead text-white">Fall in love with familiar favorites all over again in a growing collection right here on Zovy.</p>
                        <div className="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 py-3 me-md-2 mt-3 d-none d-md-block">Sign Up, it's free!</button>
                            <p className="lead display-6 text-white d-block d-md-none pt-5">Sign Up, anytime it's free!</p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center g-5 pt-5 mt-5'>
                    <div className='col-3 d-none d-md-block'>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster1} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster2} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster3} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster4} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SHOWS - Call to Action */}
            <div className="container col-xxl-8 px-4 py-5 my-5 rounded-4" id="shows-jumbotron">
                <div className="row g-5 py-5">
                    <div className="col-lg-6 pt-5">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Family time like it's 1995</h1>
                        <p className="lead text-white">The best time is family time. Watch all of your family favorites right here on Zovy.</p>
                        <div className="d-grid gap-3 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 py-3 me-md-2 mt-3 d-none d-md-block">Sign Up, it's free!</button>
                            <p className="lead display-6 text-white d-block d-md-none pt-5">Sign Up, anytime it's free!</p>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center g-5 pt-5 mt-5'>
                    <div className='col-3 d-none d-md-block'>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster5} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster6} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster7} />
                        </div>
                    </div>
                    <div className='col-3 d-none d-md-block'>
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-2 shadow-lg">
                            <img src={poster8} />
                        </div>
                    </div>
                </div>
            </div>

            {/* WAYS TO WATCH - Call to Action */}
            <div className="container px-4 py-5 my-5 rounded-4 glass-card" >
                <div className="row text-center g-5 py-4">
                    <div className="col-lg-3 py-4"></div>
                    <div className="col-lg-6 py-4">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Watch Zovy on all of your devices</h1>
                        <p className="lead text-white">Stream Zovy on unlimited devices, from your phone to your smart watch. You can view your favorite anywhere, anytime and on any device!</p>
                        <div className="text-white">
                            <FontAwesomeIcon icon={faTv} className="mx-2" size="lg" />
                            <FontAwesomeIcon icon={faApple} className="mx-2" size="xl" />
                            <FontAwesomeIcon icon={faAndroid} className="mx-2" size="xl" />
                            <FontAwesomeIcon icon={faDesktop} className="mx-2" size="lg" />
                            <FontAwesomeIcon icon={faXbox} className="mx-2" size="lg" />
                            <FontAwesomeIcon icon={faPlaystation} className="mx-2" size="lg" />
                        </div>
                    </div>
                    <div className="col-lg-3 py-4"></div>
                </div>
            </div>

            {/*  LAST Call to Action */}
            <div className="container px-4 py-5 my-5 rounded-4" id="header2" >
                <div className="row text-center g-5 py-4">
                    <div className="col-lg-3 py-4"></div>
                    <div className="col-lg-6 py-4">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Wow, you've made it this far?</h1>
                        <p className="lead text-white">Why haven't you signed up yet? We are the only streaming service that is completely free... What are you waiting for? Sign up!</p>
                        <div className="d-flex justify-content-center">
                            <button type="button" class="btn btn-danger btn-lg px-4 py-3 me-md-2 mt-3">Sign Up, seriously!</button>
                        </div>
                    </div>
                    <div className="col-lg-3 py-4"></div>
                </div>
            </div>
            

            {/* Footer */}
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">

                        <span class="mb-3 mb-md-0 text-muted">© 2022 Kane Toomer</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                <FontAwesomeIcon icon={faGlobe} />
                            </a>
                        </li>
                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>

                    </ul>
                </footer>
            </div>
        </>
    );
}

export default Landing;