import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero-section text-center py-5">
        <Container>
          <h1 className="display-3 mb-4">CREATIVE EMPOWERMENT FOR ALL</h1>
          <p className="lead mb-4">
            Connecting visionary artists and organizations with foundations and corporate partners 
            to create meaningful impact through creative collaboration.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary btn-lg mx-2">
              Explore Projects
            </Link>
            <Link to="/submit-project" className="btn btn-outline-light btn-lg mx-2">
              Submit Your Project
            </Link>
          </div>
        </Container>
      </section>

      <section className="stats-section py-5">
        <Container>
          <Row className="text-center">
            <Col md={4}>
              <div className="stat-item">
                <h2 className="stat-number">50+</h2>
                <p className="stat-label">Projects Funded</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-item">
                <h2 className="stat-number">$500K</h2>
                <p className="stat-label">Total Funding</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="stat-item">
                <h2 className="stat-number">30+</h2>
                <p className="stat-label">Partner Organizations</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="featured-projects py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Featured Projects</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="project-card h-100">
                <Card.Body>
                  <div className="project-category">Visual Arts</div>
                  <Card.Title>Community Mural Initiative</Card.Title>
                  <Card.Text>
                    A collaborative project to create five murals in underserved neighborhoods, 
                    celebrating local history and culture.
                  </Card.Text>
                  <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="project-card h-100">
                <Card.Body>
                  <div className="project-category">Music</div>
                  <Card.Title>Youth Orchestra Program</Card.Title>
                  <Card.Text>
                    Providing instruments and music education to youth in underserved communities 
                    through after-school programs.
                  </Card.Text>
                  <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="project-card h-100">
                <Card.Body>
                  <div className="project-category">Community</div>
                  <Card.Title>Urban Garden Initiative</Card.Title>
                  <Card.Text>
                    Creating community gardens in urban food deserts to provide fresh produce 
                    and educational opportunities.
                  </Card.Text>
                  <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="mb-4">About Liberate X</h2>
              <p className="lead">
                Liberate X is a 501(c)(3) organization focused on capacity building and creative 
                advocacy in Pittsburgh. We empower underrepresented creatives and community 
                organizations by connecting them with resources, funding, and partnerships.
              </p>
              <p>
                Our mission is to create a more equitable creative ecosystem where all voices 
                can be heard and all communities can thrive. Through our marketplace platform, 
                we facilitate meaningful connections between artists, organizations, foundations, 
                and corporate partners.
              </p>
            </Col>
            <Col md={6}>
              <img src="/about-image.jpg" alt="Community Impact" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="join-section py-5 bg-primary text-white">
        <Container className="text-center">
          <h2 className="mb-4">Join Our Community</h2>
          <p className="lead mb-4">
            Whether you're an artist, community organization, foundation, or corporate partner, 
            there's a place for you in the Liberate X ecosystem.
          </p>
          <div className="cta-buttons">
            <Link to="/submit-project" className="btn btn-light btn-lg mx-2">
              Submit a Project
            </Link>
            <Link to="/partner" className="btn btn-outline-light btn-lg mx-2">
              Apply as a Partner
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage; 