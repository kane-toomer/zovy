import React from 'react';

import '../App.css';

import poster3  from '../assets/terminator.svg';

function Card() {
    
    return(
        <a href="#" className="card card-cover overflow-hidden text-bg-dark rounded-2 shadow-lg" style={{ height: 300, width: 200}}>
            <img src={poster3} />
        </a>
    );
}

export default Card;