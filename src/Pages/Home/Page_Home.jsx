import React, { useState, useEffect } from 'react';
import ArticleListSlide from "../../Components/Article_List_Slide/Article_List_Slide";
import { ContainerHome, TimeSalutation,Title,ContainerSalution,SubTitle ,Image} from "./Page_Home_Style";
import Emotional_Quote_Generator_Component from '../../Components/Emotional_Quote_Generator/Emotional_Quote_Generator_Component';
import RecentPosts from '../../Components/Recent_Posts/Recent_Posts_Component';
import SocialMediaLinks from '../../Components/SocialMediaLinks/Social_Media_Links';

const Page_Home = () => {
  const [timeMessage, setTimeMessage] = useState('');

  useEffect(() => {
    const monitorTime = () => {
      const time = new Date();
      let message;
      if (time.getHours() < 12) {
        message = 'Bom Dia ☕';
      } else if (time.getHours() < 18) {
        message = 'Boa Tarde ☀️';
      } else {
        message = 'Boa Noite  🌙';
      }
      setTimeMessage(message);
    };

    monitorTime(); 
    const intervalId = setInterval(monitorTime, 60000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <ContainerHome>
     
     
    
    
      <ContainerSalution>
      <TimeSalutation>{timeMessage}</TimeSalutation>
      <Image src="/About.png" alt="photo profile Joziane"  />
      <Title>Seja Bem-Vindo(a)</Title>
      <SubTitle>Cuidar bem é uma arte que aperfeiçoamos juntos</SubTitle>
      </ContainerSalution>
      <ArticleListSlide />
      <Emotional_Quote_Generator_Component/>
      <RecentPosts/>
  
    </ContainerHome>
  );
};

export default Page_Home;
