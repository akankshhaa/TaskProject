import React from 'react'

const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-base sm:text-2xl font-medium'>Hello! <br /> <span className='text-2xl sm:text-3xl font-semibold'>{props.isAdmin ? 'Admin' : 'Employee'} 👋</span></h1>
        <button
  onClick={logOutUser}
  className="bg-red-600 text-base sm:text-lg md:text-xl font-medium text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2 rounded-sm">Log Out</button>

    </div>
  )
}

export default Header