import React, { useState } from 'react'
import '../index.css'
import TextInput from './TextInput'
import { Button, Link } from '@material-ui/core'
import { addPost, addSolution, addSolutionToPost, getPost } from '../axios';
import PostSolution from './PostSolution';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


export default function Post(props) {

    const [translate, setTranslate] = useState(false)
    const [input, setInput] = useState("");
    const [submitted, setSubmitted] = useState(false)
    const [showSolutions, setShowSolutions] = useState(false)
    const [post, setPost] = useState(props.post);
    const [solutions, setSolutions] = useState(props.post.solutions)

    const handleClickTranslate = () => {
        setTranslate(true)
    }


    const handleClickShowSolutions = () => {
        setShowSolutions(true)
    }

    const handleClickPost = () => {
        addSolution({ content: input }).then(res => {
            addSolutionToPost(res.data.id, post.id).then(response => {
                setSubmitted(true)
                setShowSolutions(true)
                setInput("")
                getPost(post.id).then(res => {
                    console.log(res.data);
                    setSolutions(res.data.solutions)
                })
            })

        })
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    if (submitted) {
        return (
            <div className='post'>
                <h2>{post.content}</h2>

                <br />
                <p>Thank you for submitting the translation! read how others translated the phrase</p>

                {showSolutions &&
                    (
                        solutions.slice(0, 10).map((solution, index) => {
                            return (
                                <PostSolution key={index} solution={solution} />
                            )
                        })
                    )
                }
            </div>)

    } else {
        return (
            <div className='post'>

                <h2>{post.solved && <CheckCircleIcon />} {post.content}</h2>
                {(!translate && !post.solved) && <Button onClick={handleClickTranslate}
                    variant="contained"
                    color="primary">
                    Translate
                </Button>}
                <br />
                {translate &&
                    (
                        <div className={"post_input_section"}><
                            TextInput handleChange={handleChange} input={input} />
                            <br />
                            <Button variant="contained" onClick={handleClickPost} color="primary">Post</Button>
                        </div>
                    )
                }


                {(!showSolutions && post.solutions.length) ? (<Button variant={'outlined'} onClick={handleClickShowSolutions}>SHOW TRANSLATIONS {post.solutions.length}</Button>) : null}

                {showSolutions &&
                    (
                        post.solutions.map((solution, index) => {
                            return (
                                <PostSolution key={index} solution={solution} />
                            )
                        })
                    )
                }


            </div>
        )
    }



    // return (
    //     <div className='post'>
    //         <h2>{post.content}</h2>

    //         { !translate && <Button onClick={handleClickTranslate}>Translate</Button>}
    //         <br />

    //         {translate &&
    //             (<div><TextInput handleChange={handleChange} input={input} />
    //                 <br />
    //                 <Button onClick={handleClickPost}>Post </Button></div>
    //             )
    //         }


    //     </div>
    // )
}
