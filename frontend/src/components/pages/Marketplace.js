import React, { useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { ProjectContext } from '../../context/ProjectContext';
import './Marketplace.css';

const Marketplace = () => {
  const { projects, getProjects } = useContext(ProjectContext);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="marketplace-page">
      <div className="marketplace-hero">
        <Container>
          <h1>CREATIVE MARKETPLACE</h1>
          <p>Discover and support innovative projects in your community</p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="mb-4">
          <Col md={4}>
            <Form.Group>
              <Form.Control type="search" placeholder="Search projects..." />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Select>
              <option>All Categories</option>
              <option>Visual Arts</option>
              <option>Music</option>
              <option>Community</option>
              <option>Education</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select>
              <option>Sort by: Latest</option>
              <option>Sort by: Funding Goal</option>
              <option>Sort by: Progress</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          {projects?.map((project) => (
            <Col md={4} className="mb-4" key={project._id}>
              <Card className="project-card h-100">
                <Card.Img 
                  variant="top" 
                  src={project.imageUrl || '/default-project.jpg'} 
                  alt={project.title}
                />
                <Card.Body>
                  <div className="project-category">{project.category}</div>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="project-progress mb-3">
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width: `${(project.currentFunding / project.fundingGoal) * 100}%` }}
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <small>${project.currentFunding} raised</small>
                      <small>${project.fundingGoal} goal</small>
                    </div>
                  </div>
                  <Button variant="primary" href={`/projects/${project._id}`}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Marketplace; 