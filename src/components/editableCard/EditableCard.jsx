import React from 'react'
import './EditableCard.css'
import {AiOutlinePlus} from 'react-icons/ai'
import CardDetails from '../cardDetails/CardDetails'


const Editable = ({text}) => {

    const [editableText, setEditableText] = React.useState('')
    const [showEditable, setShowEditable] = React.useState(false)

    const handleTaskSubmit = (e) => {
        e.preventDefault()
        setShowEditable(false)
        setEditableText('')
    }

    return (
        <div className='editable'>
            {showEditable
                ?   <CardDetails setShowEditable={setShowEditable} />
                :   <p onClick={() => setShowEditable(true)}>
                        <AiOutlinePlus /> new {text}
                    </p> 
            }
        </div>
    )
}

export default Editable

