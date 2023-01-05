import React from 'react'
import './Category.css'
import { MdMoreHoriz } from 'react-icons/md'
import Card from '../card/Card.jsx'
import Editable from '../editable/Editable'
import Dropdown from '../dropdown/Dropdown'

const Category = () => {

    const [dropdown, setDropdown] = React.useState(false)

    return (
        <div className='category'>
            {dropdown && <Dropdown type={'category'}/>}
            <div className="category_heading">
                <h4>Heading of the Category <span>0</span></h4>
                <MdMoreHoriz onClick={() => setDropdown(true)}/>
            </div>
            <div className="category_cards-container ">
                <Card />
            </div>
            <Editable text={'card'}/>
        </div>
    )
}

export default Category
