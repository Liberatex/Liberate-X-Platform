import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Container className="mt-5">
      <h1>Welcome, {user?.name}!</h1>
      <p>This is your dashboard.</p>
      <Button variant="danger" onClick={logout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard; 