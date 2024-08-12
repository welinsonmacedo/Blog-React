import React from 'react';
import { useEffect } from 'react';
import {db,auth} from './Config/Firebase/FirebaseConfig'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar_Component from './Components/NavBar/NavBar_Component';
import Page_Articles from './Pages/Articles/Page_Articles';
import Page_Home from './Pages/Home/Page_Home';
import IMCCalculatorComponent from './Components/IMC_Calculator/IMC_Calculator_Component';
import Page_Book_Recommendations from './Pages/Book_Recommendations/Page_Book_Recommendations';
import Page_Home_Admin_Panel from './AdminPanel/Pages/Page_Home_Admin_Panel/Page_Home_Admin_Panel';
import PageBlogPost from './Pages/PageBlogPost/Page_Blog_Post';
import Footer from './Components/Footer/Footer_Component';
import PageAbout from './Pages/About/Page_About';
import Page_Login_Admin from './AdminPanel/Pages/Login_Admin/Page_Login_Admin';

function App() {
  useEffect(() => {
    
    

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log('User is signed in:', user);
      } else {
        console.log('No user is signed in.');
      }
    });

    
    return () => unsubscribe();
  }, []);
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/login');

  return (
    <Router>
      {!isAdminRoute && <NavBar_Component />}
      <Routes>
        <Route path="/" element={<Page_Home />} />
        <Route path="/articles" element={<Page_Articles />} />
        <Route path="/imccalculator" element={<IMCCalculatorComponent />} />
        <Route path="/bookrecommendations" element={<Page_Book_Recommendations />} />
        <Route path="/admin/*" element={<Page_Home_Admin_Panel/>} />
        <Route path="*" element={<Page_Home />} />
        <Route path="/post/:id" element={<PageBlogPost/>} />
        <Route path="/about" element={<PageAbout/>} />
     
      </Routes>
      {!isAdminRoute && <Footer/>}
   
    </Router>
  );
}

export default App;
