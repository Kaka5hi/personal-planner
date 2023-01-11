import React from 'react'
import './Category.css'
import { MdMoreHoriz } from 'react-icons/md'
import Card from '../card/Card.jsx'
import EditableCard from '../editableCard/EditableCard'
import Dropdown from '../dropdown/Dropdown'

const Category = ({data, setCategoryList, categoryList}) => {

    const [dropdown, setDropdown] = React.useState(false)

    return (
        <div id={data?.category_id} style={{position:'relative'}} className='category'>
            {dropdown && <Dropdown 
                            setCategoryList={setCategoryList}
                            categoryList={categoryList}
                            id={data?.category_id} 
                            type={'category'}
                        />}
            <div className="category_heading">
                <h4>{data?.category_name || 'New category'} <span>{data?.category_cards.length === 0 ? '' : data?.category_cards.length}</span></h4>
                <MdMoreHoriz onClick={() => setDropdown(prev => !prev)}/>
            </div>
            <div className="category_cards-container ">
                <Card />
                <Card />
                <Card />
            </div>
            <EditableCard text={'card'}/>
        </div>
    )
}

export default Category
