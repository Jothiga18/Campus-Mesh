import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className = "p-5 text-white flex justify-between text-md font-medium">
        <div className = "flex justify-center gap-10">
            <Link to = "/"><i className="fa-solid fa-graduation-cap text-white text-3xl"></i></Link>
            <div className = "flex flex-row justify-between gap-10 ml-10 text-2xl">
                <Link to = "/courses">Courses</Link>
                <Link to = "/assignments">Assignments</Link>
                <Link to = "/clubs">Clubs and events</Link>
                <Link to = "/mentor">Mentor Connect</Link>
                <Link to = "/resources">Resources</Link>
            </div>
        </div>
        <div className = "flex justify-center gap-5">
            <Link to = "/chat"><i className="fa-solid fa-message"></i></Link>
            <Link to = "/profile"><i className="fa-solid fa-user"></i></Link>
            <Link to = "/notification"><i className="fa-solid fa-bell"></i></Link>
            <Link to = "/settings"><i className="fa-solid fa-gear"></i></Link>
            <Link to = "/logout"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
        </div>
    </div>
  )
}

export default Nav