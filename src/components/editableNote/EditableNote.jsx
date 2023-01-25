import React from 'react'
import {IoMdPricetag} from 'react-icons/io'
import {MdOutlineClose} from 'react-icons/md'

const EditableNote = ({note, notes, setNotes, setEdit, setDropDrow}) => {

    const [noteTags, setNoteTags] = React.useState("")
    const [tagArray, setTagArray] = React.useState(note?.tags)

    // dummy note object
    const [singleNote, setSingleNote] = React.useState({
        id:note?.id,
        title: note?.title,
        tags: note?.tags,
        content: note?.content
    })

    // add tag and display on editor
    const handleTagSubmit = () => {
        const tempTag = {
            id: new Date().getTime(),
            name: noteTags
        }
        setTagArray(prev => [
            ...prev,
            tempTag
        ])
        setNoteTags("")
    }

    // delete tags from editior as well as from the tag array 
    const deleteTag = (id) => {
        const filterTag = tagArray.filter(tag => tag.id !== id)
        setTagArray(filterTag)
    }

    // updating note
    const updateNote = (newNote, noteId) => {
        const noteIndex = notes.findIndex(note => note.id === noteId)
        if (noteIndex < 0) return
        const tempNotes = [...notes]
        tempNotes.splice(noteIndex, 1, newNote)
        setNotes(tempNotes);
        setEdit(false)
        setDropDrow(false)
    }

    // for pushing tags inside singlenote state
    React.useEffect(() => {
        setSingleNote(prev => {
            return {...prev, tags:tagArray}
        })
    }, [tagArray])

    return (
        <div className='note_editor'>
            <div className="note_title">
                <input
                    autoFocus
                    type="text"
                    placeholder="Title"
                    defaultValue={singleNote?.title}
                    onChange={(e) => setSingleNote(prev => {
                        return {...prev, title:e.target.value}
                    })}
                />
            </div>
            <div className="note_tags">
                <span><IoMdPricetag /> tags</span>
                <input
                    type="text"
                    value={noteTags}
                    placeholder="Tags, example: Study, Work... "
                    onChange={(e) => setNoteTags(e.target.value)}
                />
                <button onClick={handleTagSubmit}>add</button>
            </div>
            <div className="note_tags-chips_container" style={(tagArray.length === 0) ? {display: 'none'}: {display:'flex'}}>
                {
                    tagArray?.map(tag => {
                        return (
                            <span
                                className="note_tags-chips"
                                key={tag.id}
                            >
                                {tag.name} <MdOutlineClose onClick={() => deleteTag(tag.id)} />
                            </span>
                        )
                    })
                }
            </div>
            <div className="note_content">
                <textarea
                    placeholder="Type something.."
                    cols="5"
                    rows="10"
                    style={{ width: '100%', resize: 'vertical' }}
                    defaultValue={singleNote?.content}
                    onChange={(e) => setSingleNote(prev => {
                        return {...prev, content:e.target.value}
                    })}
                ></textarea>
            </div>
            <div className="note_bottom">
                <button onClick={() => updateNote(singleNote , note?.id)} >update</button>
                <button onClick={() => {
                    setEdit(false)
                    setDropDrow(false)
                }}>cancel</button>
            </div>
        </div>
    )
}

export default EditableNote
