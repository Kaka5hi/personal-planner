import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import {MdDashboard, MdOutlineSettings} from 'react-icons/md'
import {FaTasks} from 'react-icons/fa'
import {RiTodoLine} from 'react-icons/ri'
import {TbBusinessplan} from 'react-icons/tb'


const Sharedlayout = () => {

    return (
        <div className='main_container'>
            <header>
                <nav>
                    <ul className='sidebar_links'>
                        <li><NavLink to='/'>< MdDashboard />Dashboard</NavLink></li>
                        <li><NavLink to='/tasks'><FaTasks />Task</NavLink></li>
                        <li><NavLink to='/notes'><RiTodoLine />Notes</NavLink></li>
                        <li><NavLink to='/budget'><TbBusinessplan />Budget</NavLink></li>
                        <li><NavLink to='/setting'>< MdOutlineSettings />Setting</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Sharedlayout