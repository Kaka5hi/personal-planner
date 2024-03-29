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
    // query state for search functionality
    const [query, setQuery] = React.useState('')
    // erro message if input field is empty while submitting
    const [errorMsg, setErrorMsg] = React.useState(false)

    // create new note function
    const createNewNote = (newNote) => {
        if (newNote?.title === '') {
            setErrorMsg(true)
            setTimeout(() => {
                setErrorMsg(false)
            }, 1500); 
        } else {
            const temp = { ...newNote, id: new Date().getTime() }
            setNotes(prev => [
                ...prev,
                temp
            ])
        setShowNetEditor(false)
        }
    }
    
    const filteredNotes = React.useMemo(() => {
        return notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()))
    }, [notes, query])

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div className='page-container' style={{minHeight:'100vh'}}>
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
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
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
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                        />
                    }
                    {
                        filteredNotes?.map(note => <SingleNote key={note.id} note={note} notes={notes} setNotes={setNotes} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Notes
