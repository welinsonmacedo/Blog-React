import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { db } from '../../Config/Firebase/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Nav, Logo, Hamburger, Menu, MenuItem, Dropdown, DropdownButton, DropdownContent } from './NavBar_Style';
import { Link } from 'react-router-dom';

const NavBar_Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState({
    navBarColor: '#ffffff',
    navBarTextColor: '#000000',
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const loadThemeConfig = async () => {
      try {
        const docRef = doc(db, 'configs', 'theme');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && data.themeConfig) {
            setTheme(data.themeConfig);
          }
        }
      } catch (error) {
        console.error('Error loading theme configuration:', error);
      }
    };
    loadThemeConfig();
  }, []);

  return (
    <Nav style={{ backgroundColor: theme.navBarColor, color: theme.navBarTextColor }}>
      <a href="/home">
      <Logo src="./logoname.png" />
      </a>
     
      <Hamburger onClick={toggleMenu}>
        <FaBars />
      </Hamburger>
      <Menu isOpen={isOpen} >
        <MenuItem>
          <a href="/" onClick={closeMenu} style={{ color: theme.navBarTextColor }}>Home</a>
        </MenuItem>
       
        <MenuItem>
        <Link to="/bookrecommendations" onClick={closeMenu} style={{ color: theme.navBarTextColor }}>Livros</Link>
        </MenuItem>
        <Dropdown>
          <DropdownButton style={{ color: theme.navBarTextColor }}>Materiais</DropdownButton>
          <DropdownContent style={{ backgroundColor: theme.navBarColor }}>
            <Link to="/imccalculator" onClick={closeMenu} style={{ color: theme.navBarTextColor }}>Calcular IMC</Link>
           
           
          </DropdownContent>
        </Dropdown>
        <MenuItem>
          <Link to="/Articles" onClick={closeMenu} style={{ color: theme.navBarTextColor }}>Artigos</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default NavBar_Component;
