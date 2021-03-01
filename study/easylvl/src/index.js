import React from 'react';
import {render} from 'react-dom';
import Count from './Components/Counter';
function Counter(){
  return(
    <div>
      <Count/>
    </div>
  )
}
render(<Counter/>, document.getElementById('root'))
