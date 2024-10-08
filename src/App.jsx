import React from 'react';
import { useEffect } from 'react';
import { db, auth } from './Config/Firebase/FirebaseConfig'
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
import Page_Privacy_Policy from './Pages/PrivacyPolicy/Page_Privacy_Policy';
import Page_Contact from './Pages/Contact/Page_Contact';
import Emotional_Status from './Components/Emotional_Status/Emotional_Status_Component';
import ReactGA from 'react-ga';
import CertificationsList from './Pages/CertificationsList/Certifications_List';
import ScrollToTop from './Components/ScrollToTop/Scroll_To_Top';
const TRACKING_ID = "G-8HYX75WEM7";
function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search); // Rastreia a visualização da página
  }, []);
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
      <div id='container'>
        <Routes>
          <Route path="/" element={<Page_Home />} />
          <Route path="/articles" element={<Page_Articles />} />
          <Route path="/imccalculator" element={<IMCCalculatorComponent />} />
          <Route path="/bookrecommendations" element={<Page_Book_Recommendations />} />
          <Route path="/admin/*" element={<Page_Home_Admin_Panel />} />
          <Route path="*" element={<Page_Home />} />
          <Route path="/post/:id" element={<PageBlogPost />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/privacy" element={<Page_Privacy_Policy />} />
          <Route path="/contact" element={<Page_Contact />} />
          <Route path="/emotionalstatus" element={<Emotional_Status />} />
          <Route path="/certificationsList" element={<CertificationsList />} />

        </Routes>
        <ScrollToTop/>
      </div>
      {!isAdminRoute && <Footer />}

    </Router>


  );
}

export default App;
