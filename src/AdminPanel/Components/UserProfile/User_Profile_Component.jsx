// src/Components/UserProfile/UserProfile.jsx
import React, { useState, useEffect } from 'react';
import { auth } from '../../../Config/Firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const UserName = styled.h5`
  margin: 0;
  color: #8f5d5d;
`;

const UserProfile = () => {
  const [user] = useAuthState(auth);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (user) {
      setUserName(user.email|| 'Usuário');
    }
  }, [user]);

  return (
    <ProfileContainer>
      <UserName>{userName}</UserName>
    </ProfileContainer>
  );
};

export default UserProfile;
