import React from 'react';

function InputBox({ type, className, title }) {
  return (
    <div className={` flex flex-col ${className}`}>
      <label htmlFor="title" className='relative top-3 left-3 bg-white max-w-max'>{title}</label>
      <input type={type} id="title" className='border-2 border-solid border-black p-2 rounded-md' />
    </div>
  );
}

export default InputBox;
