import React from 'react'
import logo from "../assets/img/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    const headerMenu = [
    {
      name: "Explore",
      link: "/explore",
    },
    {
      name: "Creators",
      link: "/creators",
    },
    {
      name: "Community",
      link: "/community",
    },
  ];

  return (
    <header className='header'>
            <img src={logo} alt="logo" className='logo' />
            <nav className="header-menu"> 
                {headerMenu.map((item) => (
                    <Link to={item.link}>{item.name}</Link>
                ))}
            </nav>
           


    </header>
    
    )
}

export default Header