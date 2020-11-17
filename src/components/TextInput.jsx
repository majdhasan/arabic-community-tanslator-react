import React from 'react'

export default function TextInput(props) {

    const input = props.input;
    const handleChange= props.handleChange
    return (
        <textarea onChange={handleChange} className="textInputField-english" value={input} name="inputArea" rows="4" cols="50"></textarea>
    )
}
