import {Link, Outlet } from "react-router-dom";
import React from "react";

function LandingPage(){

    return(
        <div>
            <h1>successfully logged in</h1>

            <div>
                <div>
                    <nav>
                        <Link to = "/">Sign out</Link>
                    </nav>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default LandingPage;