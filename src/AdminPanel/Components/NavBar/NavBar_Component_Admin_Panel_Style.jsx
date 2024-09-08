import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff0;
  padding: 0 1rem;
margin-bottom: 5rem;
  color: #000000;
  min-width: 100%;
  border-bottom: 2px solid #7b8fc5ae;
  position: fixed;
  @media (max-width: 768px) {
   justify-content:space-between;
   align-items: center;
   
  }
 
`;

export const Logo = styled.h2`

color: #3b5c79;
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    margin-right: 25px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #e1edee;
    position: absolute;
    top: 40px;
    left: 0;
    padding: 10px;
  }
`;

export const MenuItem = styled.li`
  a {
    color: #087ea1;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #552e2e;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

export const DropdownButton = styled.div`
  color: #087ea1;
  font-weight: bold;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
text-align: center;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #ddd;
    }
  }
`;
