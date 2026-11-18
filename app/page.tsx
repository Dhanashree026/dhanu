import React from 'react' 
import Image from 'next/image'
import Navbar from './components/navbar/Navbar'

function page() {
  return (
    <>
  {/* <div>dhanu</div> */}
    <Navbar/>

    <div className='p-2 flex w-full h-screen md:flex-row addflex-col'>

      <div className='p-4 w-1/2 gap-10 flex flex-col item-center justify-center'><h1 className='text-2xl'>Welcome to SIGCE</h1><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur officia doloremque natus possimus cupiditate voluptas explicabo facere recusandae omnis amet, ducimus enim soluta ipsum facilis, eos repellat molestiae accusamus reiciendis.</p>
      <button className='p-4 bg-black text-white rounded-lg w-fit'>Join with us</button>
        
      </div>
      <div className='p-4 w-1/2 flex item-center justify-center'> <Image className='w-fit' src='/login.png' alt='login' width = '500' height='500' ></Image> </div>
    
    </div>
    </>
    
  )
}

export default page