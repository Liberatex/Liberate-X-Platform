import React, { useContext } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/lx-logo.png"
            alt="Liberate X Logo"
            className="navbar-logo"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/team" className="nav-link-custom">
              TEAM
            </Nav.Link>
            <Nav.Link as={Link} to="/marketplace" className="nav-link-custom">
              MARKETPLACE
            </Nav.Link>
            <Nav.Link as={Link} to="/resources" className="nav-link-custom">
              RESOURCES
            </Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link disabled className="text-light d-flex align-items-center">
                  <img
                    src={user?.organization?.logo || '/default-avatar.png'}
                    alt="Profile"
                    className="profile-img me-2"
                  />
                  Welcome, {user?.name}
                </Nav.Link>
                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/submit-project" className="nav-link-custom">
                  SUBMIT PROJECT
                </Nav.Link>
                <Nav.Link as={Link} to="/partner" className="nav-link-custom">
                  PARTNER WITH US
                </Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 