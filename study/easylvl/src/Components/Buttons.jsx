import React from 'react'
export default function Buttons(props) {
    return (
        <div>
            <button onClick={() => props.setCount(props.count + 1)}>Добавить</button>
        </div>
    )
}
