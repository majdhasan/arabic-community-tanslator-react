import React, { useState } from 'react'
import '../index.css'
import TextInput from './TextInput'
import { Button } from '@material-ui/core'


export default function Post(props) {

    const [solutions, setSolutions] = useState([])
    const [translate, setTranslate] = useState(false)

    const handleClick = () => {
        setTranslate(true)
    }

    const content = props.content
    return (
        <div className='post'>
            <h2>{content}</h2>

            { !translate && <Button onClick={handleClick}>Translate</Button>}
            <br />
            {translate &&
                (<div><TextInput /> <br/>
                    <Button>Post </Button></div>)}


        </div>
    )
}
