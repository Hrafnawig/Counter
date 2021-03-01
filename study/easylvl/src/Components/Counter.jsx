import React, { useState } from 'react'
import center from "./Counter.module.css";
import Buttons from './Buttons';
export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className={center.center}>{count}</div>
            <Buttons setCount={setCount} count={count}/>
        </div>
    )
}
