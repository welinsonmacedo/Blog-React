import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContainerHome } from "./Page_Home_Admin_Panel_Style";
import NavBar_Component_Admin_Panel from './../../Components/NavBar/NavBar_Component_Admin_Panel';
import ComponentSelector from "../../Components/Component_Selector/Component_Selector_Component";
import ThemeConfigurator from "../../Components/Theme_Configurator/Theme_Configurator_Component";
import CreateArticle from "../../Components/Create_Article/Create_Article_Component";
import AddBook from "../../Components/AddBook/Add_Book_Component";
import AddQuoteComponent from '../../Components/AddQuote/Add_Quote_Component';

const Page_Home_Admin_Panel = () => {
  return (
    <ContainerHome>
      <NavBar_Component_Admin_Panel />
      <Routes>
        <Route path="/component-selector" element={<ComponentSelector />} />
        <Route path="/theme-configurator" element={<ThemeConfigurator />} />
        <Route path="/create-article" element={<CreateArticle />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-quote" element={<AddQuoteComponent/>} />
      </Routes>
    </ContainerHome>
  );
}

export default Page_Home_Admin_Panel;
