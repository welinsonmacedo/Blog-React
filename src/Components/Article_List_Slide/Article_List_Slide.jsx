import React, { useState, useEffect } from 'react';
import { db } from '../../Config/Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Big_Card_Component from '../Big_Card/Big_Card_Component';
import { Container, ContainerResponsivo } from './Article_List_Slide_Style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ArticleListSlide = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const articlesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <ContainerResponsivo>
      {articles.length > 1 ? (
        <Slider {...settings}>
          {articles.map((article) => (
            <Container key={article.id}>
              <Big_Card_Component article={article} />
            </Container>
          ))}
        </Slider>
      ) : (
        articles.map((article) => (
          <Container key={article.id}>
            <Big_Card_Component article={article} />
          </Container>
        ))
      )}
    </ContainerResponsivo>
  );
};

export default ArticleListSlide;
