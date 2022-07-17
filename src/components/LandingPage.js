import {Link, Outlet } from "react-router-dom";
import React from "react";

function LandingPage(){

    return(
        <div>
            <div>
                <div>
                    <nav>
                        <Link to = "/">Sign out</Link>
                    </nav>
                </div>
                <Outlet/>
            </div>

            <h1>successfully logged in</h1>

            
        </div>
    )
}

export default LandingPage;