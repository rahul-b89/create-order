import React from 'react'
import Button from './Button'


export default function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center border-1 border-black border-solid'>
       <div className='flex flex-row gap-2'>
           <div>&larr;</div>
           <div>Create Order</div>
       </div>
       <div className='flex flex-box'>
           <Button/>
       </div>
    </div>
  )
}