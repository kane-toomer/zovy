import React from "react";
import StreamingNavbar from "./StreamingNavbar";
import Card from './Card';


function Streaming() {

    return(
        <>
            {/* Navbar */}
            <StreamingNavbar />
            
            {/* Card List*/}
            <div className="container py-5">
                <Card />
            </div>
        </>
    );
}

export default Streaming;