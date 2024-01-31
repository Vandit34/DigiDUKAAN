import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar flex flex-col justify-center pt-5'>
      <div className='SearchBar relative justify-center w-max'>
        <i className='fa-brands fa-searchengin relative left-8 top-[0.2rem] text-[1.4rem] text-gray-900 cursor-pointer'></i>
        <input
          type='text'
          placeholder='Search DigiDukaan.in'
          className='w-[18rem] border-gray-400 border-2 rounded-md py-2 pl-10 pr-20'
        />
        <i className='fa-solid fa-camera relative top-[0.2rem] text-[1.4rem] left-[-4.3rem] text-gray-500 cursor-pointer'></i>
        <i className='fa-solid fa-microphone relative top-[0.2rem] text-[1.4rem] left-[-3.5rem] text-gray-500 cursor-pointer'></i>
      </div>
      <div className='options pt-5'>
        <ul className='flex'>
          <li className='w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer'>Electronics</li>
          <li className='w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer'>Fashion</li>
          <li className='w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer'>Beauty</li>
          <li className='w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer'>Furniture</li>
          <li className='w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer'>Books</li>
          {/* Sign In Button */}
          <li className='w-[5rem] text-center text-[0.7rem] text-[#1F2937] bg-[#FFEDD5] px-2 py-5 hover:bg-[#C2410C] hover:text-[#FFFFFF] cursor-pointer'>
            <Link to ="/signin" className="focus:outline-none">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
