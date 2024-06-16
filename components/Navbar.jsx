import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setIsMenuOpen } from '../ReduxStore/Slice';
import { useFirebase} from "../lib/firebaseContext";

export default function Index() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector(state => state.example);
  const firebaseContext = useFirebase() || {};
  const { products} = firebaseContext;
  console.log("all products", products);

  const openMenu = () => {
    dispatch(setIsMenuOpen(true));
  }

  const closeMenu = () => {
    dispatch(setIsMenuOpen(false));
  }

  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      closeMenu();
    }
  }

  return (
    <header className='relative flex justify-between items-center py-4 px-4 lg:px-8 bg-blue-600 text-white'>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" stroke="currentColor" 
        className="w-6 h-6 block lg:hidden"
        onClick={openMenu}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <h2 className='font-bold'>VeeMart</h2>
      <ul className={`list-none flex flex-col lg:flex-row justify-center items-center lg:space-x-3 space-y-4 lg:space-y-0 absolute ${isMenuOpen ? "left-0" : "-left-[120%] lg:left-auto"} transition-all top-0 w-full lg:w-auto lg:relative bg-blue-700 lg:h-auto h-[100vh] lg:bg-transparent z-40 lg:z-auto`}>
        <li onClick={handleMenuItemClick}><Link href={"/"}>Home</Link></li>
        <li onClick={handleMenuItemClick}><Link href={"/"}>Products</Link></li>
        <li onClick={handleMenuItemClick}><Link href={"/"}>About</Link></li>
        <li onClick={handleMenuItemClick}><Link href={"/"}>Contact</Link></li>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth="1.5" stroke="currentColor" 
          className="w-6 h-6 lg:hidden block absolute z-50 top-6 right-8"
          onClick={closeMenu}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    </header>
  )
}
