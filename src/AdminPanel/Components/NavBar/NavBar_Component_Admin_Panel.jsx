import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, Logo, Hamburger, Menu, MenuItem, Dropdown, DropdownButton, DropdownContent } from './NavBar_Component_Admin_Panel_Style';
import { Link } from 'react-router-dom';
import UserProfile from '../UserProfile/User_Profile_Component';
const NavBar_Component_Admin_Panel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
     <Nav>
      <Logo >{UserProfile}</Logo>
      <UserProfile/>
      <Hamburger onClick={toggleMenu}>
        <FaBars />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <a href="/" onClick={closeMenu}>Meu Site</a>
        </MenuItem>
        <MenuItem>
          <a href="/admin/create-article" onClick={closeMenu}>Publicar</a>
        </MenuItem>
        <Dropdown>
          <DropdownButton>Configurações</DropdownButton>
          <DropdownContent>
            <a href="/admin/theme-configurator" onClick={closeMenu}>Tema</a>
           
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <DropdownButton>Outros</DropdownButton>
          <DropdownContent>
            <Link to="/admin/add-book" onClick={closeMenu}>Adicionar livro</Link>
            <Link to="/admin/add-quote" onClick={closeMenu}>Adicionar Frases </Link>
            <Link to="/admin/add-certifications" onClick={closeMenu}>Adicionar Certificados </Link>
           
          </DropdownContent>
        </Dropdown>
       
      </Menu>
    </Nav>
    </>
   
  );
};

export default NavBar_Component_Admin_Panel;
