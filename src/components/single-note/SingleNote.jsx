import React from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import {IoMdPricetag} from 'react-icons/io'
import './SingleNote.css'

const SingleNote = ({note}) => {

    const [fullView, setFullview] = React.useState(false)
      
    return (
        <div className="single_note-full_view">
            <div className="single_note-inner_container">
                <div className="top">
                    <h2>{note?.title}</h2>
                    <MdMoreHoriz />
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
    
}

export default SingleNote
