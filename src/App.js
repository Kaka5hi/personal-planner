import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Board from './pages/Board'
import Budget from './pages/Budget'
import Notes from './pages/Notes'
import Setting from './pages/Setting'
import Error from './pages/Error'
import Sharedlayout from './pages/SharedLayout'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Sharedlayout />}>
                    <Route index element={<Home />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/project/board/:id' element={<Board />} />
                    <Route path='/budget' element={<Budget />} />
                    <Route path='/notes' element={<Notes />} />
                    <Route path='/setting' element={<Setting />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
