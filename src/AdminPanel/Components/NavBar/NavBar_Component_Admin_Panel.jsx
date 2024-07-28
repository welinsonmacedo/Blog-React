import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, Logo, Hamburger, Menu, MenuItem, Dropdown, DropdownButton, DropdownContent } from './NavBar_Component_Admin_Panel_Style';
import { Link } from 'react-router-dom';
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
      <Logo >PanelAdmin</Logo>
      <Hamburger onClick={toggleMenu}>
        <FaBars />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <a href="/" onClick={closeMenu}>Meu Site</a>
        </MenuItem>
        <MenuItem>
          <a href="#" onClick={closeMenu}>Modulos</a>
        </MenuItem>
        <Dropdown>
          <DropdownButton>Configurações</DropdownButton>
          <DropdownContent>
            <a href="#" onClick={closeMenu}>Service 1</a>
            <a href="#" onClick={closeMenu}>Service 2</a>
            <a href="#" onClick={closeMenu}>Service 3</a>
          </DropdownContent>
        </Dropdown>
        <Dropdown>
          <DropdownButton>Temas</DropdownButton>
          <DropdownContent>
            <Link to="/imccalculator" onClick={closeMenu}>Calcular IMC</Link>
            <Link to="/bookrecommendations" onClick={closeMenu}>Livros</Link>
            <a href="#" onClick={closeMenu}>Service 3</a>
          </DropdownContent>
        </Dropdown>
        <MenuItem>
          <Link to="/Articles" onClick={closeMenu}>Publicar</Link>
        </MenuItem>
      </Menu>
    </Nav>
    </>
   
  );
};

export default NavBar_Component_Admin_Panel;
