import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex border w-1/4'>
        <div>logo</div>
        <div className='flex gap-5 justify-center item-center w-2/4 md:flex hidden' >
            <Link href ="/about">About</Link>
            <h2>Contact</h2>
            <h2>FaQ</h2>
        </div>
        <div>
            <button>Login</button>
        </div>
        
    </div>
    

  )
}

export default Navbar