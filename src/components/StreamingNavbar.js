import React, { useState } from 'react'
import '../App.css';

function StreamingNavbar() {
    const [shouldShow, setShouldShow] = useState(false);

    const onAction = () => {
        setShouldShow(!shouldShow);
    }

    return (
        <div className="container-fluid px-3">
            <header className="blog-header lh-1 py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4">
                        <a className="navbar-brand link-secondary display-6 fw-bold" href="#">Zovy</a>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a href="#" className="link-secondary" onClick={onAction} aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                        </a>
                        <a className="btn btn-sm btn-outline-secondary" href="#">Sign Out</a>
                    </div>
                </div>
            </header>

            {/* Search Bar */}
            {
                shouldShow ? (
                    <form>
                        <div className="form-outline my-4">
                            <input type="text" id="search" className="form-control form-control-lg" placeholder='Search Zovy...' />
                        </div>
                    </form>
                ) : null
            }
            <hr />
            <div className="scroll_nav py-1 mb-2">
                <nav className="nav">
                    <ul className="ul">
                        <a className="p-2 link-secondary" href="#">All Content</a>
                        <a className="p-2 link-secondary" href="#">Action & Adventure</a>
                        <a className="p-2 link-secondary" href="#">Cartoons</a>
                        <a className="p-2 link-secondary" href="#">Comedies</a>
                        <a className="p-2 link-secondary" href="#">Documentaries</a>
                        <a className="p-2 link-secondary" href="#">Dramas</a>
                        <a className="p-2 link-secondary" href="#">Family Fun</a>
                        <a className="p-2 link-secondary" href="#">Horror</a>
                        <a className="p-2 link-secondary" href="#">Romance</a>
                        <a className="p-2 link-secondary" href="#">TV Shows</a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default StreamingNavbar;