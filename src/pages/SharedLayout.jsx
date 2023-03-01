import React from 'react'
import { Outlet, NavLink, Link } from "react-router-dom";
import {MdDashboard} from 'react-icons/md'
import {FaTasks} from 'react-icons/fa'
import {RiTodoLine} from 'react-icons/ri'
import {TbBusinessplan} from 'react-icons/tb'
import { RxDoubleArrowRight, RxCross2 } from 'react-icons/rx'
import {GiHamburgerMenu} from 'react-icons/gi'


const Sharedlayout = () => {

    const [show, setShow] = React.useState(true)

    // for smal screen size sidebar
    const [showSidebar, setShowSidebar] = React.useState(false)

    return (
        <div className='main-container'>
            {/* big screen size sidebar */}
            <header style={ show ? {width:'18vw'} : {width:'6vw'}}>
                <nav>
                    <div className="logo" style={show ? {display:'flex'} : {display:'none'}}>
                        <Link to='/'><img src="./personal-planner-nav-logo.png" alt="logo" /></Link>
                    </div>
                    <ul className='sidebar_links'>
                        <li title='Dashboard' ><NavLink to='/'>< MdDashboard />{show ? 'Dashboard' : ''}</NavLink></li>
                        <li title='Project'><NavLink to='/project'><FaTasks />{show ? 'Project' : ''}</NavLink></li>
                        <li title='Notes'><NavLink to='/notes'><RiTodoLine />{show ? 'Notes' : ''}</NavLink></li>
                        <li title='Budget'><NavLink to='/budget'><TbBusinessplan />{show ? 'Budget' : ''}</NavLink></li>
                    </ul>
                </nav>
                <button title='Toggle Sidebar' onClick={() => setShow(prev=>!prev) }>{show ? <RxCross2 /> : <RxDoubleArrowRight /> }</button>
            </header>

            {/* tablet screen size nav bar */}
            <div className="nav-small">
                <GiHamburgerMenu onClick={() => setShowSidebar(true)} />
                <Link to='/'><img src="./personal-planner-nav-logo.png" alt="logo" /></Link>
            </div>

            {/* sidebar for table screen size */}
            <div className="small-sidebar" style={ showSidebar ? {left:0} : {left: '-100%'} }>
                <ul className='sidebar_links'>
                    <li title='Dashboard' ><NavLink to='/'>< MdDashboard />{showSidebar ? 'Dashboard' : ''}</NavLink></li>
                    <li title='Project'><NavLink to='/project'><FaTasks />{showSidebar ? 'Project' : ''}</NavLink></li>
                    <li title='Notes'><NavLink to='/notes'><RiTodoLine />{showSidebar ? 'Notes' : ''}</NavLink></li>
                    <li title='Budget'><NavLink to='/budget'><TbBusinessplan />{showSidebar ? 'Budget' : ''}</NavLink></li>
                    <button onClick={() => setShowSidebar(false)} title='Budget'>close</button>
                </ul>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Sharedlayout
