import React from 'react'
import { useParams } from 'react-router-dom'
import Category from '../components/category/Category'
import EditableCategory from '../components/editableCategory/EditableCategory'
import './Board.css'

const Board = () => {
    const params = useParams()

    const board = {
        id:params.id,
        name:params.name,
        categories: [
            {
                category_id: new Date().getTime(),
                category_name: 'Working',
                category_cards: [
                    {
                        card_id: new Date().getTime() * 2,
                        card_name: 'Frontend',
                        card_description: '',
                        card_labels: [],
                        card_priority:'High',
                        card_date: '',
                        card_subtasks: []
                    },
                    {
                        card_id: new Date().getTime() * 3,
                        card_name: 'Backend work',
                        card_description: '',
                        card_labels: [],
                        card_priority:'High',
                        card_date: '',
                        card_subtasks: []
                    }
                ]
            },
        ]
    }

    const [categoryList, setCategoryList] = React.useState(JSON.parse(localStorage.getItem(`${board.id}`))|| [])

    // for drag functionality
    const [targetCard, setTargetCard] = React.useState({
        cardId:'',
        categoryId: ''
    })

    const deleteCard = (cardId, categoryId) => {
        const categoryIndex = categoryList.findIndex(item => item.category_id === categoryId)
        if(categoryIndex < 0) {
            return
        }
        const cardIndex = categoryList[categoryIndex].category_cards.findIndex(item => item.card_id === cardId)
        if(cardIndex < 0) {
            return
        }

        const tempCategory = [...categoryList]
        tempCategory[categoryIndex].category_cards.splice(cardIndex, 1)
        setCategoryList(tempCategory)
    }

    const handleDragEnd = (cardId, categoryId) => {
        let sourceCategoryIndex, sourceCardIndex, targetCategoryIndex, targetCardIndex

        // checking inside categories
        sourceCategoryIndex = categoryList.findIndex(item => item.category_id === categoryId)
        if(sourceCategoryIndex < 0) {
            return
        }

        // using categoryIndex to go inside particular category and then check for card index
        sourceCardIndex = categoryList[sourceCategoryIndex].category_cards.findIndex(item => item.card_id === cardId)
        if(sourceCardIndex < 0) {
            return
        }

        // similar for target, checking inside categories
        targetCategoryIndex = categoryList.findIndex(item => item.category_id === targetCard.categoryId)
        if(targetCategoryIndex < 0) {
            return
        }

        // using categoryIndex to go inside particular category and then check for card index
        targetCardIndex = categoryList[targetCategoryIndex].category_cards.findIndex(item => item.card_id === targetCard.cardId)
        if(targetCardIndex < 0) {
            return
        }

        // copy all categories
        const tempCategory = [...categoryList]
        // navigate through the categories for the card and create its copy before deleting it
        const tempCard = tempCategory[sourceCategoryIndex].category_cards[sourceCardIndex]
        // copy created than using slpice function to delete the card
        tempCategory[sourceCategoryIndex].category_cards.splice(sourceCardIndex, 1)
        // using target category index and card index we can insert the copy at that posiiton
        tempCategory[targetCategoryIndex].category_cards.splice(targetCardIndex, 0, tempCard)
        setCategoryList(tempCategory)
    }

    const handleDragEnter = (cardId, categoryId) => {
        setTargetCard({
            cardId,
            categoryId            
        }) 
    }

    return (
        <div className='page-container ' style={{paddingRight:0, paddingBottom: '2px', paddingLeft: 0}}>
            <h1 style={{textAlign:'center', textTransform:'capitalize'}}>{params.name}</h1>
            <div className="board_outer-container">
                <div className="board_inner-container ">
                    {categoryList.map(category => <Category 
                                                    key={category.category_id}
                                                    category={category}
                                                    setCategoryList={setCategoryList}
                                                    categoryList={categoryList}
                                                    deleteCard={deleteCard}
                                                    handleDragEnd={handleDragEnd}
                                                    handleDragEnter={handleDragEnter}
                                                />)}
                    <div style={{padding:0, lineHeight: '28px'}}>
                        <EditableCategory 
                            text={'category'}
                            setCategoryList={setCategoryList}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
