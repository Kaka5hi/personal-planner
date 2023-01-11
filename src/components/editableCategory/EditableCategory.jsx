import React from 'react'
import './EditableCategory.css'
import {AiOutlinePlus} from 'react-icons/ai'

const Editable = ({text, setCategoryList}) => {

    const [editableText, setEditableText] = React.useState('')
    const [showEditable, setShowEditable] = React.useState(false)

    const handleTaskSubmit = (e) => {
        e.preventDefault()
        setCategoryList(prev => [
            ...prev, {
                category_id: new Date().getTime(),
                category_name: editableText,
                category_cards:[]
            }
        ])
        setShowEditable(false)
        setEditableText('')
    }

    return (
        <div className='editable'>
            {showEditable
            ?   <form onSubmit={handleTaskSubmit}>
                    <input onChange={(e) => setEditableText(e.target.value)} autoFocus type="text" autoComplete='off' placeholder={`enter ${text} name'`} value={editableText}/>
                    <div className="form_btn">
                        <button onClick={handleTaskSubmit}>add</button>
                        <button onClick={() => setShowEditable(false)}>close</button>
                    </div>
                </form>
            :   <p onClick={() => setShowEditable(true)}>
                    <AiOutlinePlus /> new {text}
                </p> 
            }
        </div>
    )
}

export default Editable
