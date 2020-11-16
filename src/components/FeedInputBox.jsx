import React, { useState } from 'react'
import '../index.css'
import { Button } from '@material-ui/core';
import { addPost } from '../axios'

export default function FeedInputBox() {

    const [input, setInput] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        addPost({ "content": input }).then(res => {
            setInput("")
            setSubmitted(true)
        })
    }

    if (submitted) {

        return (
            <div className="newPost">
                <h3 className='newPostHeader'>Your Post hast been submitted</h3>
                <br />
                <Button onClick={() => { setSubmitted(false) }}>Create a new Post</Button>

            </div>
        )

    } else {

        return (
            <div className="newPost">
                <h3 className='newPostHeader'>New Post</h3>

                <textarea required className="textInputField" name="inputArea" rows="6" cols="60" value={input} onChange={handleChange}></textarea>
                <br />

                <Button onClick={handleClick} variant="contained" color="primary">
                    Post
                    </Button>

            </div>
        )
    }


}
