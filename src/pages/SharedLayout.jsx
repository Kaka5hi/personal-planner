import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import {MdDashboard, MdOutlineSettings} from 'react-icons/md'
import {FaTasks} from 'react-icons/fa'
import {RiTodoLine} from 'react-icons/ri'
import {TbBusinessplan} from 'react-icons/tb'
import {RxDoubleArrowRight , RxCross2} from 'react-icons/rx'


const Sharedlayout = () => {

    const [show, setShow] = React.useState(true)

    return (
        <div className='main-container'>
            <header style={ show ? {width:'18vw'} : {width:'6vw'}}>
                <nav>
                    <ul className='sidebar_links'>
                        <li title='Dashboard' ><NavLink to='/'>< MdDashboard />{show ? 'Dashboard' : ''}</NavLink></li>
                        <li title='Project'><NavLink to='/project'><FaTasks />{show ? 'Project' : ''}</NavLink></li>
                        <li title='Notes'><NavLink to='/notes'><RiTodoLine />{show ? 'Notes' : ''}</NavLink></li>
                        <li title='Budget'><NavLink to='/budget'><TbBusinessplan />{show ? 'Budget' : ''}</NavLink></li>
                        <li title='Setting'><NavLink to='/setting'>< MdOutlineSettings />{show ? 'Setting' : ''}</NavLink></li>
                    </ul>
                </nav>
                <button title='Toggle Sidebar' onClick={() => setShow(prev=>!prev) }>{show ? <RxCross2 /> : <RxDoubleArrowRight /> }</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Sharedlayout
