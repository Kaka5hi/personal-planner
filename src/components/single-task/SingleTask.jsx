import React from 'react'
import {BiPlus, BiMinus,  BiLinkExternal} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const SingleTask = ({item}) => {

    const [expandCard, setExpandCard] = React.useState(false)

    const totalCards = item?.categories?.map(item => item?.category_cards)?.flat()
    const totalTasks = totalCards?.map(card => card?.card_subtasks)?.flat()
    const remainingTasks = totalTasks?.filter(item => item?.subtask_status === false)

    return (
        <div className="single-task">
            <div className="single-task_top">
                <h4>{item?.boardName || 'Board'}</h4>
                <button onClick={() => setExpandCard(prev => !prev)}>{expandCard ? <BiMinus /> : <BiPlus />}</button>
            </div>
            {
                expandCard
                &&
                <ul className="single-task_bottom">
                    <li>Categories: {item?.categories?.length}</li>
                    <li>Cards: { totalCards?.length }</li>
                    <li>Total tasks: {totalTasks?.length }</li>
                    <li>remaining tasks : { remainingTasks.length}</li>
                    <li>completed tasks: {totalTasks.length - remainingTasks.length}</li>
                    <Link to={`/project/board/${item?.boardName}/${item?.id}`}>Go to Project<BiLinkExternal /></Link>
                </ul>
            }
        </div>
    )
}

export default SingleTask
