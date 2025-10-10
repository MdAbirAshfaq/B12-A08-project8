import React from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router';
const Navbar = () => {


    return (
        <div>
            <div className="navbar border-b-1 border-gray-200 w-11/12 m-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  mt-3 w-52 p-2 shadow">
        <li className='mx-4' >Home</li>
        <li className='mx-4' >Apps</li>
        <li className='mx-2' >Installation</li>
      </ul>
    </div>
    <a className="btn hover:bg-white font-bold  btn-ghost text-[#9F62F2] text-xl"> <img  className='w-[45px]  h-[45px]' src="/src/assets/logo.png" alt="logo" />HERO.IO</a>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#9F62F2] font-bold border-b-2' : ''} ><li className='mx-4' >Home</li></NavLink>
      <NavLink to="/Apps" className={({ isActive }) => isActive ? 'text-[#9F62F2] font-bold border-b-2' : ''} ><li className='mx-4' >Apps</li></NavLink>
      <NavLink to="/Installation" className={({ isActive }) => isActive ? 'text-[#9F62F2] font-bold border-b-2' : ''}><li className='mx-2' >Installation</li></NavLink>
    </ul>
  </div>
  <div className="navbar-end ">
    <a href='https://github.com/MdAbirAshfaq/B12-A08-project8' className="btn  text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] "><i class="fa-brands fa-github"></i>Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;