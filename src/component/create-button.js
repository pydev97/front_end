import React from 'react'

export default function CreateButton(props) {

    return (
        <div>
            <button onClick={props.handleOnClick}>createTask</button>
        </div>
    )
}