import React, {useState} from 'react'
import { Wrapper } from './rating.style'

export const Rating = ({callback}) => {

  const [value, setValue] = useState(5)
  return (
    <Wrapper>
      <input 
        type="range" 
        min='1' 
        max='10' 
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        />
        {value}
        <p>
          <button onClick={()=> callback(value)}>Noter</button>
        </p>
    </Wrapper>
  )
}
