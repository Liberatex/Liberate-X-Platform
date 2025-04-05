import React, { useState, useContext } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../../context/ProjectContext';
import './SubmitProject.css';

const SubmitProject = () => {
  const navigate = useNavigate();
  const { createProject } = useContext(ProjectContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    fundingGoal: '',
    timeline: '',
    location: '',
    impact: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProject(formData);
      navigate('/marketplace');
    } catch (error) {
      console.error('Error submitting project:', error);
    }
  };

  return (
    <div className="submit-project-page">
      <div className="submit-hero">
        <Container>
          <h1>SUBMIT YOUR PROJECT</h1>
          <p>Share your creative vision with our community</p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="form-container">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Project Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="Visual Arts">Visual Arts</option>
                    <option value="Music">Music</option>
                    <option value="Community">Community</option>
                    <option value="Education">Education</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Funding Goal ($)</Form.Label>
                  <Form.Control
                    type="number"
                    name="fundingGoal"
                    value={formData.fundingGoal}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Project Timeline</Form.Label>
                  <Form.Control
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g., 6 months"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Expected Impact</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="impact"
                    value={formData.impact}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Project Image URL</Form.Label>
                  <Form.Control
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </Form.Group>

                <div className="text-center mt-5">
                  <Button type="submit" className="btn-submit">
                    Submit Project
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubmitProject; 