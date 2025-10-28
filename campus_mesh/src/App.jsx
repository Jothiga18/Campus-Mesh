import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Courses from './Components/Courses'
import Club from './Components/Club'
import Assignment from './Components/Assignment'
import Mentor from './Components/Mentor'
import Resource from './Components/Resource'
import CampusMeshChatPage from './Components/Chat' 
import CampusMeshNotificationPage from './Components/Notification'
import Profile from './Components/Profile'
import Settings from './Components/Settings'


import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className = "bg-gradient-to-b from-slate-950 from-10% via-slate-800 via-50% to-indigo-500 w-screen bg-cover h-screen">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/courses" element = {<Courses />}></Route>
          <Route path = "/assignments" element = {<Assignment />}></Route>
          <Route path = "/clubs" element = {<Club />}></Route>
          <Route path = "/mentor" element = {<Mentor />}></Route>
          <Route path = "/resources" element = {<Resource />}></Route>
          <Route path = "/chat" element = {<CampusMeshChatPage />}></Route>
          <Route path = "/notification" element = {< CampusMeshNotificationPage/>}></Route>
          <Route path = "/profile" element = {< Profile/>}></Route>
          <Route path = "/settings" element = {< Settings/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App