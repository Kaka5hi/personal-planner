import React from 'react'
import './Category.css'
import { MdMoreHoriz } from 'react-icons/md'
import Card from '../card/Card.jsx'
import EditableCard from '../editableCard/EditableCard'
import Dropdown from '../dropdown/Dropdown'

const Category = ({category, setCategoryList, categoryList, createNewCard, deleteCard, handleDragEnter, handleDragEnd}) => {

    const [dropdown, setDropdown] = React.useState(false)

    return (
        <div id={category?.category_id} style={{position:'relative'}} className='category'>
            {dropdown && <Dropdown 
                            setCategoryList={setCategoryList}
                            categoryList={categoryList}
                            id={category?.category_id} 
                            type={'category'}
                        />}
            <div className="category_heading">
                <h4>{category?.category_name || 'New category'} <span>{category?.category_cards.length === 0 ? '' : `${category?.category_cards.length} Task`}</span></h4>
                <MdMoreHoriz onClick={() => setDropdown(prev => !prev)}/>
            </div>
            <div className="category_cards-container" style={(category.category_cards.length === 0) ? {display:'none'} : {display:'flex'}}>
                {
                    category.category_cards?.map((card) => <Card
                        key={card?.card_id}
                        cardId={card?.card_id}
                        card={card} 
                        deleteCard={deleteCard}
                        categoryId={category?.category_id}
                        handleDragEnd={handleDragEnd}
                        handleDragEnter={handleDragEnter}
                        categoryList={categoryList}
                        setCategoryList={setCategoryList}
                    />)
                }
            </div>
            <EditableCard 
                text={'card'}
                createNewCard={createNewCard}
                category={category}
                categoryId={category?.category_id}
                setCategoryList={setCategoryList}
                categoryList={categoryList}
            />
        </div>
    )
}

export default Category
