import React from 'react'
import LabelChips from '../label-chips/LabelChips'
import { MdMoreHoriz, MdAccessTime } from 'react-icons/md'
import {FaTasks} from 'react-icons/fa'
import './Card.css'
import PriorityChip from '../priority/PriorityChip'
import Dropdown from '../dropdown/Dropdown'

const Card = () => {

    const [dropdown, setDropdown] = React.useState(false)

    return (
        <div style={{position:'relative'}} className='card'>
            {dropdown && <Dropdown type={'card'}/>}
            <div className="card_top">
                <h4 style={{userSelect:'none'}}>Card heading</h4>
                <MdMoreHoriz onClick={() => setDropdown(prev => !prev)}/>
            </div>
            <div className="card_middle">
                <LabelChips text={"frontend"}/>
                <LabelChips text={"ui"}/>
                <LabelChips text={"react"}/>
                <LabelChips text={"tailwind"}/>
                <LabelChips text={"redux"}/>
                <PriorityChip />
            </div>
            <div className="card_bottom">
                <span>
                    <MdAccessTime />
                    due sep 12 (1 day left)
                </span>
                <span>
                    <FaTasks />
                    3/12 subtasks completed
                </span>
            </div>
        </div>
    )
}

export default Card
