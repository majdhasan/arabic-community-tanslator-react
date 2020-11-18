import React from 'react'

export default function PostSolution(props) {

    const solution = props.solution;

    return (
        <li>{solution.content}</li>
    )
}
