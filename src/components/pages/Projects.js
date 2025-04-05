import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container className="dashboard-container">
      <h1>Projects</h1>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                Description of Project 1
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Description of Project 2
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Description of Project 3
              </Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Projects; 