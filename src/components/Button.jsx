import React from 'react';

function Button() {
  return (
    <>
      <div className='p-2 border-1 border-solid border-black rounded-md' style={{ backgroundColor:'#2CAE66' }}>
        <button className='px-6 text-white' type='submit' title='Button Title'>Save</button>
      </div>
    </>
  );
}

export default Button;
