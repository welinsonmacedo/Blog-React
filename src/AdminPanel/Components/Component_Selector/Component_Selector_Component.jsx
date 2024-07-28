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

const Checkbox = styled.input`
  margin-right: 10px;
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
  &:hover {
    background-color: #0056b3;
  }
`;

const ComponentSelector = () => {
  const [components, setComponents] = useState({
    NavBar: false,
    Footer: false,
    ContactForm: false,
  });

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const docRef = doc(db, 'configs', 'components');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setComponents(docSnap.data().activeComponents || {});
        }
      } catch (error) {
        console.error('Error loading configuration:', error);
      }
    };
    loadConfig();
  }, []);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setComponents(prevState => ({ ...prevState, [name]: checked }));
  };

  const saveConfig = async () => {
    try {
      const docRef = doc(db, 'configs', 'components');
      await setDoc(docRef, { activeComponents: components });
      console.log('Configuration saved successfully');
    } catch (error) {
      console.error('Error saving configuration:', error);
    }
  };

  return (
    <Container>
      <Heading>Select Components</Heading>
      <Label>
        <Checkbox
          type="checkbox"
          name="NavBar"
          checked={components.NavBar}
          onChange={handleChange}
        />
        NavBar
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="Footer"
          checked={components.Footer}
          onChange={handleChange}
        />
        Footer
      </Label>
      <Label>
        <Checkbox
          type="checkbox"
          name="ContactForm"
          checked={components.ContactForm}
          onChange={handleChange}
        />
        Contact Form
      </Label>
      <Button onClick={saveConfig}>Save Configuration</Button>
    </Container>
  );
};

export default ComponentSelector;
