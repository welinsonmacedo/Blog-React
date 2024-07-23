import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, Logo, Hamburger, Menu, MenuItem, Dropdown, DropdownButton, DropdownContent } from './NavBar_Style';
import { Link } from 'react-router-dom';
const NavBar_Component = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <Nav>
      <Logo src="./logoname.png"/>
      <Hamburger onClick={toggleMenu}>
        <FaBars />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <a href="/">Home</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Comunidade</a>
        </MenuItem>
        <Dropdown>
          <DropdownButton>Projetos</DropdownButton>
          <DropdownContent>
            <a href="#">Service 1</a>
            <a href="#">Service 2</a>
            <a href="#">Service 3</a>
          </DropdownContent>
        </Dropdown>
        <MenuItem>
          <Link to="/Articles">Artigos</Link>
        </MenuItem>
      </Menu>
    </Nav>
    </>
   
  );
};

export default NavBar_Component;
