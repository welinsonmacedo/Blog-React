import React, { useState, useEffect } from 'react';
import { db } from '../../../Config/Firebase/FirebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding-top: 5rem;
  margin-top: 5rem;
`;

const Heading = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 16px;
  color: #555;
`;

const ColorInput = styled.input`
  display: block;
  width: 100%;
  padding: 5px;
  margin-top: 5px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ThemeConfigurator = () => {
  const [theme, setTheme] = useState({
    titleBackgroundColor: '#ffffff',
    navBarColor: '#ffffff',
    navBarTextColor:'#ffffff',
    footerColor: '#ffffff',
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTheme(prevState => ({ ...prevState, [name]: value }));
  };

  const saveThemeConfig = async () => {
    try {
      const docRef = doc(db, 'configs', 'theme');
      await setDoc(docRef, { themeConfig: theme });
      console.log('Theme configuration saved successfully');
    } catch (error) {
      console.error('Error saving theme configuration:', error);
    }
  };

  return (
    <Container>
      <Heading>Configure Theme</Heading>
     
      <Label>
      NavBarTextColor
        <ColorInput
          type="color"
          name="navBarTextColor"
          value={theme.navBarTextColor}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Nav Bar Color
        <ColorInput
          type="color"
          name="navBarColor"
          value={theme.navBarColor}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Footer Color
        <ColorInput
          type="color"
          name="footerColor"
          value={theme.footerColor}
          onChange={handleChange}
        />
      </Label>
      <Button onClick={saveThemeConfig}>Save Theme</Button>
    </Container>
  );
};

export default ThemeConfigurator;
