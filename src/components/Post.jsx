import React , {useState} from 'react'
import '../index.css'


export default function Post(props) {

    const [solutions, setSolutions] = useState([])


    const content = props.content
    return (
        <div className='post'>
            <h2>{content}</h2>
            <label htmlFor="">Solution</label>
            <input type="text"/>
        </div>
    )
}
