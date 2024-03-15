import React from 'react'

export default function Dropdown({title}) {
  return (
    <div className={`flex flex-col  `}>
        <label htmlFor="title" className="relative top-3 left-3 bg-white max-w-max">{title}</label>
       <select id="title" className='border-2 border-solid border-black p-2 rounded-md '>
          <option default className='hidden'></option>
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
          <option>option4</option>
          <option>option5</option>
          <option>option6</option>
       </select>
    </div>
  )
}
