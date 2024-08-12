import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContainerHome } from "./Page_Home_Admin_Panel_Style";
import NavBar_Component_Admin_Panel from './../../Components/NavBar/NavBar_Component_Admin_Panel';
import ComponentSelector from "../../Components/Component_Selector/Component_Selector_Component";
import ThemeConfigurator from "../../Components/Theme_Configurator/Theme_Configurator_Component";
import CreateArticle from "../../Components/Create_Article/Create_Article_Component";
import AddBook from "../../Components/AddBook/Add_Book_Component";
import AddQuoteComponent from '../../Components/AddQuote/Add_Quote_Component';
import LoginComponent from '../../Pages/Login_Admin/Page_Login_Admin';
import PrivateRoute from '../../Context/PrivateRoute';

const Page_Home_Admin_Panel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se há um valor de autenticação no localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  // Atualiza o localStorage sempre que o estado de login mudar
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <ContainerHome>
      <NavBar_Component_Admin_Panel />
      <Routes>
        <Route path="/login" element={<LoginComponent setIsLoggedIn={setIsLoggedIn} />} />
        <Route 
          path="/component-selector" 
          element={
            <PrivateRoute >
              <ComponentSelector />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/theme-configurator" 
          element={
            <PrivateRoute >
              <ThemeConfigurator />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/create-article" 
          element={
            <PrivateRoute >
              <CreateArticle />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/add-book" 
          element={
            <PrivateRoute >
              <AddBook />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/add-quote" 
          element={
            <PrivateRoute >
              <AddQuoteComponent />
            </PrivateRoute>
          } 
        />
      </Routes>
    </ContainerHome>
  );
}

export default Page_Home_Admin_Panel;
