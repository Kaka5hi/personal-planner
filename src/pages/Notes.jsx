import React from 'react'
import { FiSearch, FiPlus } from 'react-icons/fi'
import NoteEditor from '../components/note-editor/NoteEditor'
import SingleNote from '../components/single-note/SingleNote'
import './Notes.css'

const Notes = () => {

    // main notes array
    const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem('notes')) || [])

    // to show note editior when we click on +add note
    const [showNoteEditor, setShowNetEditor] = React.useState(false)

    // create new note function
    const createNewNote = (newNote) => {
        const temp = { ...newNote, id: new Date().getTime() }
        setNotes(prev => [
            ...prev,
            temp
        ])
        setShowNetEditor(false)
    }
    
    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div className='page-container'>
            <h1 style={{ textAlign: 'center' }}>Notes</h1> 
            <div className="notes_outer-container">
                <div className="notes_top">
                    <div className="notes_create">
                        <button onClick={() => setShowNetEditor(true)} ><FiPlus /> add note </button>
                    </div>
                    <div className="notes_search">
                        <input
                            type="text"
                            placeholder="Search note"
                        />
                        <FiSearch />
                    </div>
                </div>
                <div className="notes_main">
                {
                    showNoteEditor
                    &&
                    <NoteEditor
                        createNewNote={createNewNote}
                        setShowNetEditor={setShowNetEditor}
                    />
                }
                    {
                        notes?.map(note => <SingleNote key={note.id} note={note} notes={notes} setNotes={setNotes} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Notes
