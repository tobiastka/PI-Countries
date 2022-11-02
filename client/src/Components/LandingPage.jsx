import React from 'react'
import { NavLink } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <strong>Langing Page</strong>
            <br />

            <NavLink to={"/home"}>
                <button>Home</button>
            </NavLink>

        </div>
    )
}

export default LandingPage