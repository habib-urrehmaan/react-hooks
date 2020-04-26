import React from 'react'

export default function Input({setInput}) {
    let changeHandler = (e) =>{
        setInput(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={changeHandler}/>
        </div>
    )
}
