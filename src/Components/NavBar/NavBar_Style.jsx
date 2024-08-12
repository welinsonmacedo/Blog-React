import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
background: rgb(187,245,235);
background: -moz-radial-gradient(circle, rgba(187,245,235,1) 0%, rgba(255,255,255,1) 47%, rgba(78,235,122,1) 100%);
background: -webkit-radial-gradient(circle, rgba(187,245,235,1) 0%, rgba(255,255,255,1) 47%, rgba(78,235,122,1) 100%);
background: radial-gradient(circle, rgba(187,245,235,1) 0%, rgba(255,255,255,1) 47%, rgba(78,235,122,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#bbf5eb",endColorstr="#4eeb7a",GradientType=1);
  
  z-index: 999;
  color: #000;
  min-width: 100%;
  max-width: 100%;
  position: fixed;
  @media (max-width: 768px) {
   justify-content:space-between;
   padding-right: 30px;
  }
 
`;

export const Logo = styled.img`
width:160px;
border-radius: 10%;
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
  padding: 1rem;
background-color:none;  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0;
    padding: 10px;
    background-color: #ffff;
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

  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

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
