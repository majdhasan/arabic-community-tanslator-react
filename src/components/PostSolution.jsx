import React from 'react'

export default function PostSolution(props) {
    
    const solution = props.solution;

    return (

        <div className="post_solution">
            <h5>{solution.content}</h5>
        </div>
    )
}
