import React from 'react'

function Header() {
  return (
    <div className='container'>
        <div className='row mt-2 d-flex justify-content-center'>
           <div className='col-md-6 mt-5 bg-dark' style={{border:"1px solid black"}} >
            <h1 className='text-center text-white'>Todo-List</h1>
           </div>
        </div>
    </div>
  )
}

export default Header