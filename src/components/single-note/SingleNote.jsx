import React from 'react'
import { MdMoreHoriz} from 'react-icons/md'
import {IoMdPricetag} from 'react-icons/io'
import './SingleNote.css'
import EditableNote from '../editableNote/EditableNote'


const SingleNote = ({note, setNotes, notes}) => {

    const [fullView, setFullview] = React.useState(false)
    const [dropDown, setDropDrow] = React.useState(false)
    const [edit, setEdit] = React.useState(false)

    const handleNoteDelete = (noteId) => {
        let filteredNotes = notes.filter(note => note.id !== noteId)
        setNotes(filteredNotes);
    }
     
    if (!edit) {
        return (
            <div className="single_note-full_view">
                <div className="single_note-inner_container">
                <div className="top">
                    <h2>{note?.title}</h2>
                    <MdMoreHoriz
                        onClick={()=> setDropDrow(prev => !prev)}
                    />
                    {
                        dropDown
                        &&
                        <div className="top_dropdown">
                            <span onClick ={() => setEdit(true)}>Edit</span>
                            <span onClick={() => handleNoteDelete(note?.id)}>delete</span>
                        </div>
                    }
                </div>
                <div className="middle">
                    {
                        note?.tags?.map(tag => {
                            return (
                                <span key={tag?.id}><IoMdPricetag />{tag?.name}</span>
                                )
                            })
                    }
                </div>
                <div className="bottom">
                    <p className={fullView ?'' : 'line-clamp'}>{note?.content}</p>
                </div>
                {
                    note?.content.length > 120
                    &&
                    <button onClick={()=> setFullview(prev => !prev)}>{ fullView ? "Show less" : "Read more" }</button>
                }
            </div>
            </div>
        )
    } else {
        return (
            <>
                <EditableNote
                    note={note}
                    notes={notes}
                    setNotes={setNotes}
                    setEdit={setEdit}
                    setDropDrow={setDropDrow}
                />
            </>
        )
    }
    
}

export default SingleNote
