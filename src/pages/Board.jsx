import React from 'react'
import { useParams } from 'react-router-dom'
import Category from '../components/category/Category'
import Editable from '../components/editableCategory/EditableCategory'
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
                        card_labels: [
                            {
                                label_id:new Date().getTime() * Math.random(),
                                label_name:'frontend',
                                label_color:'blue',
                            },
                            {
                                label_id:new Date().getTime() * Math.random(),
                                label_name:'ui',
                                label_color:'green',
                            },
                            {
                                label_id:new Date().getTime() * Math.random(),
                                label_name:'react',
                                label_color:'brown',
                            }
                        ],
                        card_priority:'High',
                        card_date: '',
                        card_subtasks: []
                    }
                ]
            },
        ]
    }

    const [categoryList, setCategoryList] = React.useState(board.categories)

    return (
        <div className='page-container ' style={{paddingRight:0, paddingBottom: '2px', paddingLeft: 0}}>
            <h1 style={{textAlign:'center', textTransform:'capitalize'}}>{params.name}</h1>
            <div className="board_outer-container">
                <div className="board_inner-container ">
                    {categoryList.map(category => <Category 
                                                    key={category.category_id}
                                                    data={category}
                                                    setCategoryList={setCategoryList}
                                                    categoryList={categoryList}
                                                />)}
                    <div style={{padding:0, lineHeight: '28px'}}>
                        <Editable 
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
