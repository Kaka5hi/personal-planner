import React from 'react'
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, DoughnutController} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, DoughnutController);

const GridView = ({ item }) => {

    const totalCards = item?.categories?.map(item => item?.category_cards)?.flat()
    const totalTasks = totalCards?.map(card => card?.card_subtasks)?.flat()
    const remainingTasks = totalTasks?.filter(item => item?.subtask_status === false)
    
    const data = {
        labels: [ 'Remaining','Completed'],
        datasets: [
            {
                label: 'Task',
                data: [remainingTasks.length, totalTasks.length - remainingTasks.length],
                backgroundColor: [
                    '#ff3b30',
                    '#4caf50',
                ],
                borderColor: [
                    'white',
                ],
                borderWidth: 2,
                hoverOffset: 10,
            },
        ],
        
    }

    return (
        <div className='grid-view'>
            <div className="gird-view-top">
                <h4>{item?.boardName}</h4>
            </div>
            <div className="gird-view-bottom">
                {/* for graph/doughnut chart */}
                <div className="left">
                    <Doughnut data={data} options={{ layout: { padding: 10 } }}/>
                </div>

                {/* for info */}
                <div className="right">
                    <span>categories: {item?.categories?.length}</span>
                    <span>cards: {totalCards?.length }</span>
                    <span>total tasks: {totalTasks?.length}</span>
                    <Link to={`/project/board/${item?.boardName}/${item?.id}`}>Go to Project</Link>
                </div>
            </div>
        </div>
    )
}

export default GridView
