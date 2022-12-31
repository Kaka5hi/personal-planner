import React from 'react'
import SingleBoardBtn from '../components/single-board-btn/SingleBoardBtn'
import './Project.css'

const Project = () => {

    const [showPopupModal, setShowPopupModal] = React.useState(false)

    return (
        <div className='page-container'>
            <div className="project_outer-container">
                <div className="create_board-btn_container">
                    <button onClick={() => setShowPopupModal(true)} title='Create Board'>Create Board +</button>
                </div>

                {/* Here we will add board containers when user click on create card and give the board name */}

            </div>
            
            {showPopupModal && <div className="create_board-popup_modal">
                <div className="inner-container">
                    <div className="top">
                        <h4>New Board</h4>
                    </div>
                    <div className="middle">
                        <form>
                            <input 
                                type="text"
                                placeholder='Enter a name for the Board'
                            />
                        </form>
                    </div>
                    <div className="bottom">
                        <button onClick={() => setShowPopupModal(false)} >Cancel</button>
                        <button>Create</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Project
