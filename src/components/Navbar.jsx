import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-600 text-white p-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8 '> iTask</span>

        </div>
        <ul className='flex gap-10'>
            <li className='cursor-pointer hover:font-bold transition-all '>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
