import React from 'react'
import { Link } from "react-router-dom";
export default function Te() {
  return (
    <div>
       <ul>
          <button><Link to="/">Home</Link></button>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
    </div>
  )
}