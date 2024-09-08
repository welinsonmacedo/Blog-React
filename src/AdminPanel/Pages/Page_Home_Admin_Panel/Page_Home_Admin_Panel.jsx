// src/Pages/Home_Admin/Page_Home_Admin_Panel.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContainerHome } from "./Page_Home_Admin_Panel_Style";
import NavBar_Component_Admin_Panel from './../../Components/NavBar/NavBar_Component_Admin_Panel';
import ComponentSelector from "../../Components/Component_Selector/Component_Selector_Component";
import ThemeConfigurator from "../../Components/Theme_Configurator/Theme_Configurator_Component";
import CreateArticle from "../../Components/Create_Article/Create_Article_Component";
import AddBook from "../../Components/AddBook/Add_Book_Component";
import AddQuoteComponent from '../../Components/AddQuote/Add_Quote_Component';
import LoginComponent from '../../Pages/Login_Admin/Page_Login_Admin';
import Page_Register_Admin from '../Register_Admin/Page_Register_Admin';
import PrivateRoute from '../../Context/PrivateRoute';
import UserProfile from '../../Components/UserProfile/User_Profile_Component';

const Page_Home_Admin_Panel = () => {
  return (
    <ContainerHome>
      <NavBar_Component_Admin_Panel />
    
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/registerUser" element={<Page_Register_Admin />} />
        <Route path="/homePanel" element={<PrivateRoute element={<Page_Home_Admin_Panel />} />} />
        <Route path="/component-selector" element={<PrivateRoute element={<ComponentSelector />} />} />
        <Route path="/theme-configurator" element={<PrivateRoute element={<ThemeConfigurator />} />} />
        <Route path="/create-article" element={<PrivateRoute element={<CreateArticle />} />} />
        <Route path="/add-book" element={<PrivateRoute element={<AddBook />} />} />
        <Route path="/add-quote" element={<PrivateRoute element={<AddQuoteComponent />} />} />
      </Routes>
    </ContainerHome>
  );
}

export default Page_Home_Admin_Panel;
