import React, { useState } from 'react';

export default function InputComponent(props) {
    return (
        <div>
            <p>{props.fieldLabel}</p>
             <input disabled={props.isDisable} id = {props.fieldLabel} value={props.value} onChange={props.handleOnchange}></input>
        </div>
    )
}