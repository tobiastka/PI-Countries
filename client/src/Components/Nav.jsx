import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css';

function Nav() {
    return (
        <nav className='nav-container'>
            <div class="nav-title">
                COUNTRIES
                <img src="https://images.squarespace-cdn.com/content/v1/5c1c081412b13fef184c93db/10f7b423-c141-4e43-9083-63b1cb70d181/28997_Out+of+Spec+Studios_Logo_AC_AV-02-01+%282%29+%282%29.png" alt="" />
            </div>

            <div className="nav-bottons">
                <NavLink  exact className={"nav-botton"} to="/"><div>HOME</div></NavLink>
                <NavLink className={"nav-botton"} to="/home"><div>COUNTRIES</div></NavLink>
                <NavLink className={"nav-botton"} to="/createactivity"><div></div>TOURIST ACTIVITYS</NavLink>
            </div>
            
        </nav>
    )
}

export default Nav