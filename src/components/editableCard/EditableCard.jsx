import React from 'react'
import './EditableCard.css'
import {AiOutlinePlus} from 'react-icons/ai'
import CardDetails from '../cardDetails/CardDetails'
import { useParams } from 'react-router-dom'


const Editable = ({text, category, categoryId, setCategoryList, categoryList,}) => {

    const params = useParams()
    // for new card popup
    const [showEditableCard, setShowEditableCard] = React.useState(false)

    const createNewCard = (cardDetails, categoryId) => {
        const newCard = {
            card_id:new Date().getTime() + Math.random(),
            card_name: cardDetails?.card_name,
            card_description: cardDetails?.card_description,
            card_labels: cardDetails?.card_labels,
            card_priority: cardDetails?.card_priority,
            card_date: cardDetails?.card_date,
            card_subtasks: cardDetails?.card_subtasks
        }

        const index = categoryList.findIndex(item => item.category_id === categoryId)
        if(index < 0) {
            return
        }

        const tempCategory = [...categoryList]
        tempCategory[index].category_cards.push(newCard)
        setCategoryList(tempCategory)
        setShowEditableCard(false)
    }

    React.useState(()=> {
        localStorage.setItem(`${params.id}`, JSON.stringify(categoryList))
    }, [categoryList])


    return (
        <div className='editable_card'>
            {showEditableCard
                ?   <CardDetails 
                        setShowEditableCard={setShowEditableCard} 
                        createNewCard={createNewCard} 
                        category={category}
                        categoryId={categoryId}
                    />
                :   <p onClick={() => setShowEditableCard(true)}>
                        <AiOutlinePlus /> new {text}
                    </p> 
            }
        </div>
    )
}

export default Editable

