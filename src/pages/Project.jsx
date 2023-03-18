import React from 'react'
import SingleBoardBtn from '../components/single-board-btn/SingleBoardBtn'
import './Project.css'

const Project = () => {

    const [showPopupModal, setShowPopupModal] = React.useState(false)
    const [boardName, setBoardName] = React.useState('')
    const [boards, setBoards] = React.useState(JSON.parse(localStorage.getItem('boardList')) || [])

    const handleBoardName = (e) => {
        e.preventDefault()
        if(boardName) {
            const newBoard = {id: new Date().getTime().toString(), boardName: boardName, categories:[]}
            setBoards(prev => [
                ...prev,
                newBoard
            ]);
            setShowPopupModal(false)
            localStorage.setItem('boardList', JSON.stringify([...boards, newBoard]))
        } else {
            alert("Enter a board name, You can not leave board name empty")
        }
    }

    return (
        <div className='page-container' style={{minHeight:'100vh'}}>
            <div className="project_outer-container">
                <div className="create_board-btn_container">
                    <button onClick={() => setShowPopupModal(true)} title='Create Board'>Create Board +</button>
                </div>

                {
                    boards.map(item => <SingleBoardBtn
                                        key={item.id} 
                                        item={item} 
                                        boards={boards} 
                                        setBoards={setBoards} 
                    />)
                }
            </div>
            
            {
                showPopupModal && <div className="create_board-popup_modal">
                    <div className="inner-container">
                        <div className="top">
                            <h4>New Board</h4>
                        </div>
                        <div className="middle">
                            <form onSubmit={handleBoardName}>
                                <input 
                                    autoFocus
                                    type="text"
                                    placeholder='Enter a name for the Board'
                                    onChange={(e) => setBoardName(e.target.value)}
                                />
                            </form>
                        </div>
                        <div className="bottom">
                            <button onClick={() => setShowPopupModal(false)} >Cancel</button>
                            <button onClick={handleBoardName}>Create</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Project
