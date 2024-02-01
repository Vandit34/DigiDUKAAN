import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar flex flex-col justify-center pt-5'>
      <div className='SearchBar relative flex justify-center w-screen items-center'>
        <h1 className='hidden text-orange-600 text-[4rem] absolute left-6 brand customScreen2:text-[1.5rem] customScreen2:block weight '>
          DigiDukaan
        </h1>
        <i className='fa-brands fa-searchengin relative left-8 top-[0.2rem] text-[1.4rem] text-gray-900 cursor-pointer'></i>
        <input
          type='text'
          placeholder='Search DigiDukaan.in'
          className='w-[18rem] border-gray-400 border-2 rounded-md py-2 pl-10  customScreen3:w-[50%]'
        />
        <i className='fa-solid fa-camera relative top-[0.2rem] text-[1.4rem] left-[-4.3rem] text-gray-500 cursor-pointer'></i>
        <i className='fa-solid fa-microphone relative top-[0.2rem] text-[1.4rem] left-[-3.5rem] text-gray-500 cursor-pointer'></i>

        {/* Sign In Button */}
        <button className='rounded-md px-1 py-1 absolute right-5 w-[2.3rem] text-center text-[0.7rem]  text-[#FFFFFF]  bg-gray-800  hover:bg-green-400 hover:text-[#1F2937] cursor-pointer customScreen1:w-[3.8rem] customScreen1:text-[1rem]'>
          <Link to='/signin' className='focus:outline-none'>
            Sign In
          </Link>
        </button>

      </div>
      <div className='options pt-5 w-screen'>
        <ul className='flex'>
          <li className='flex-grow w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer customScreen1:text-[1rem]'>
            Electronics
          </li>
          <li className='flex-grow w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer customScreen1:text-[1rem]'>
            Fashion
          </li>
          <li className='flex-grow w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer customScreen1:text-[1rem]'>
            Beauty
          </li>
          <li className='flex-grow w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer customScreen1:text-[1rem]'>
            Furniture
          </li>
          <li className='flex-grow w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer customScreen1:text-[1rem]'>
            Books
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
