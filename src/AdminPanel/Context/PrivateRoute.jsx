// src/Context/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Config/Firebase/FirebaseConfig';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Adicione uma tela de carregamento ou spinner
  }

  return user ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
