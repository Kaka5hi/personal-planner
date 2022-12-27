import React from 'react'

const SingleTask = () => {

    const [expandCard, setExpandCard] = React.useState(false)

    return (
        <div className="single-task">
            <div className="single-task_top">
                <h4>Project/Task name</h4>
                <button onClick={() => setExpandCard(prev => !prev)}>{expandCard ? 'Hide' : 'Show'}</button>
            </div>
            {expandCard && <ul className="single-task_bottom">
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, eum.</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, eum.</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, eum.</li>
            </ul>}
        </div>
    )
}

export default SingleTask
