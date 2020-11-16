import React from 'react'
import '../index.css'
import { Button } from '@material-ui/core';

export default function FeedInputBox() {
    return (
        <div className="newPost">
            <h3 className='newPostHeader'>New Post</h3>

            <textarea className="textInputField" name="inputArea" rows="4" cols="50"></textarea><br />

            <Button variant="contained" color="primary">
                Post
</Button>

        </div>
    )
}
