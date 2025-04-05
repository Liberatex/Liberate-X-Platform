import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Button, Modal, Badge } from 'react-bootstrap';
import './Resources.css';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('creators');
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [regionFilter, setRegionFilter] = useState('pittsburgh');

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setShowModal(true);
  };

  const pittsburghOpportunities = [
    {
      funder: 'The Pittsburgh Foundation',
      opportunities: [
        {
          title: 'Small and Mighty Grants Program',
          deadline: '2024-06-30',
          amount: '$25,000',
          focus: 'Community Development',
          description: 'Supporting small, neighborhood-based nonprofits.',
          link: '/resources/files/pgh-foundation-small-mighty.pdf'
        },
        {
          title: 'Arts & Culture Grants',
          deadline: '2024-07-15',
          amount: '$50,000',
          focus: 'Arts & Culture',
          description: 'Supporting creative initiatives in Pittsburgh communities.',
          link: '/resources/files/pgh-foundation-arts.pdf'
        }
      ]
    },
    {
      funder: 'Heinz Endowments',
      opportunities: [
        {
          title: 'Creative Development Awards',
          deadline: '2024-08-01',
          amount: '$75,000',
          focus: 'Arts & Innovation',
          description: 'Supporting creative projects that enhance Pittsburgh's cultural landscape.',
          link: '/resources/files/heinz-creative-dev.pdf'
        },
        {
          title: 'Community Impact Grants',
          deadline: '2024-09-15',
          amount: '$100,000',
          focus: 'Community Development',
          description: 'Supporting initiatives that strengthen Pittsburgh neighborhoods.',
          link: '/resources/files/heinz-community-impact.pdf'
        }
      ]
    },
    {
      funder: 'PNC Foundation',
      opportunities: [
        {
          title: 'Arts Alive Initiative',
          deadline: '2024-07-30',
          amount: '$40,000',
          focus: 'Arts Education',
          description: 'Supporting arts education and access in Pittsburgh.',
          link: '/resources/files/pnc-arts-alive.pdf'
        }
      ]
    }
  ];

  const resources = {
    creators: [
      {
        category: 'Pittsburgh Funding Opportunities',
        items: [
          {
            title: 'Pittsburgh Funding Guide 2024',
            description: 'Comprehensive overview of local foundation and corporate funding opportunities in Pittsburgh.',
            type: 'PDF Guide',
            fileSize: '3.2 MB',
            link: '/resources/files/pgh-funding-guide.pdf'
          },
          {
            title: 'Local Grant Calendar',
            description: 'Interactive calendar of Pittsburgh-area grant deadlines and application windows.',
            type: 'Excel + PDF',
            fileSize: '1.8 MB',
            link: '/resources/files/pgh-grant-calendar.xlsx'
          },
          {
            title: 'Pittsburgh Funder Directory',
            description: 'Detailed profiles of local foundations and corporate sponsors with funding priorities.',
            type: 'PDF Guide',
            fileSize: '4.5 MB',
            link: '/resources/files/pgh-funder-directory.pdf'
          }
        ]
      },
      {
        category: 'Grant Writing & Funding',
        items: [
          {
            title: 'Complete Grant Writing Guide',
            description: 'A comprehensive guide to writing successful grant proposals, including templates and examples.',
            type: 'PDF Guide',
            fileSize: '2.8 MB',
            link: '/resources/files/grant-writing-guide.pdf'
          },
          {
            title: 'Project Budget Template Pack',
            description: 'Excel templates for project budgeting, including cost estimation tools and financial projections.',
            type: 'Excel Package',
            fileSize: '1.2 MB',
            link: '/resources/files/budget-templates.xlsx'
          },
          {
            title: 'Funding Strategy Workbook',
            description: 'Interactive workbook to develop your funding strategy and identify potential funding sources.',
            type: 'Interactive PDF',
            fileSize: '3.5 MB',
            link: '/resources/files/funding-strategy.pdf'
          }
        ]
      },
      {
        category: 'Project Development',
        items: [
          {
            title: 'Impact Measurement Toolkit',
            description: 'Tools and frameworks for measuring and reporting project impact, including KPI templates.',
            type: 'PDF + Excel',
            fileSize: '4.2 MB',
            link: '/resources/files/impact-toolkit.zip'
          },
          {
            title: 'Project Timeline Templates',
            description: 'Gantt chart and project timeline templates for effective project planning.',
            type: 'Excel + PDF',
            fileSize: '2.1 MB',
            link: '/resources/files/timeline-templates.zip'
          },
          {
            title: 'Community Engagement Handbook',
            description: 'Strategies and best practices for community outreach and stakeholder engagement.',
            type: 'PDF Guide',
            fileSize: '5.1 MB',
            link: '/resources/files/community-handbook.pdf'
          }
        ]
      },
      {
        category: 'Marketing & Presentation',
        items: [
          {
            title: 'Project Pitch Deck Template',
            description: 'Professional presentation templates for pitching your project to potential funders.',
            type: 'PPT + PDF',
            fileSize: '8.3 MB',
            link: '/resources/files/pitch-deck-templates.zip'
          },
          {
            title: 'Social Media Toolkit',
            description: 'Templates and guides for promoting your project across social media platforms.',
            type: 'PDF + Assets',
            fileSize: '15.2 MB',
            link: '/resources/files/social-media-toolkit.zip'
          },
          {
            title: 'Visual Storytelling Guide',
            description: 'Learn how to create compelling visual narratives for your project documentation.',
            type: 'PDF Guide',
            fileSize: '6.8 MB',
            link: '/resources/files/storytelling-guide.pdf'
          }
        ]
      }
    ],
    sponsors: [
      {
        category: 'Due Diligence Tools',
        items: [
          {
            title: 'Project Evaluation Framework',
            description: 'Comprehensive framework for evaluating project proposals and assessing potential impact.',
            type: 'Excel + PDF',
            fileSize: '3.6 MB',
            link: '/resources/files/evaluation-framework.zip'
          },
          {
            title: 'Risk Assessment Template',
            description: 'Templates and checklists for evaluating project risks and mitigation strategies.',
            type: 'Excel',
            fileSize: '1.8 MB',
            link: '/resources/files/risk-assessment.xlsx'
          },
          {
            title: 'Impact Metrics Guide',
            description: 'Guide to setting and measuring meaningful impact metrics for funded projects.',
            type: 'PDF Guide',
            fileSize: '4.2 MB',
            link: '/resources/files/impact-metrics.pdf'
          }
        ]
      },
      {
        category: 'Grant Management',
        items: [
          {
            title: 'Grant Agreement Templates',
            description: 'Customizable legal templates for grant agreements and reporting requirements.',
            type: 'Word + PDF',
            fileSize: '2.4 MB',
            link: '/resources/files/agreement-templates.zip'
          },
          {
            title: 'Progress Monitoring Tools',
            description: 'Templates and dashboards for tracking project progress and milestone achievement.',
            type: 'Excel Package',
            fileSize: '3.1 MB',
            link: '/resources/files/monitoring-tools.xlsx'
          },
          {
            title: 'Reporting Templates Pack',
            description: 'Standardized templates for financial and impact reporting from grantees.',
            type: 'Word + Excel',
            fileSize: '5.3 MB',
            link: '/resources/files/reporting-templates.zip'
          }
        ]
      },
      {
        category: 'Strategic Planning',
        items: [
          {
            title: 'Portfolio Management Guide',
            description: 'Best practices for managing a diverse portfolio of funded projects.',
            type: 'PDF Guide',
            fileSize: '6.7 MB',
            link: '/resources/files/portfolio-guide.pdf'
          },
          {
            title: 'Impact Investment Framework',
            description: 'Framework for aligning funding strategies with impact objectives.',
            type: 'PDF + Excel',
            fileSize: '4.8 MB',
            link: '/resources/files/investment-framework.zip'
          },
          {
            title: 'Stakeholder Engagement Kit',
            description: 'Tools for effective communication and engagement with project stakeholders.',
            type: 'PDF + PPT',
            fileSize: '7.2 MB',
            link: '/resources/files/stakeholder-kit.zip'
          }
        ]
      }
    ]
  };

  const featuredCreators = [
    {
      name: "Maya Johnson",
      role: "Visual Artist",
      image: "/images/resources/creator-1.jpg",
      project: "Community Mural Initiative",
      grant: "Pittsburgh Foundation Arts Grant",
      quote: "The resources provided helped me secure funding for a community-wide art project."
    },
    {
      name: "Marcus Thompson",
      role: "Music Educator",
      image: "/images/resources/creator-2.jpg",
      project: "Youth Jazz Program",
      grant: "PNC Arts Alive",
      quote: "Through Liberate X's guidance, we've expanded our youth music program to serve more students."
    },
    {
      name: "Dr. Aisha Williams",
      role: "Community Organizer",
      image: "/images/resources/creator-3.jpg",
      project: "Tech Education Initiative",
      grant: "Heinz Endowments",
      quote: "The platform's resources were instrumental in launching our STEM program."
    }
  ];

  return (
    <div className="resources-page">
      <div className="resources-hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Container>
          <h1>RESOURCES</h1>
          <p>Empowering Black creators and communities with tools for success</p>
        </Container>
      </div>

      <Container className="py-5">
        <div className="success-stories mb-5">
          <h2 className="section-title">Success Stories</h2>
          <Row>
            {featuredCreators.map((creator, index) => (
              <Col md={4} key={index}>
                <Card className="creator-card">
                  <div className="creator-image">
                    <img src={creator.image} alt={creator.name} />
                  </div>
                  <Card.Body>
                    <h3>{creator.name}</h3>
                    <h4>{creator.role}</h4>
                    <p className="project-name">{creator.project}</p>
                    <p className="grant-name">{creator.grant}</p>
                    <blockquote>"{creator.quote}"</blockquote>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Nav className="resource-tabs mb-5" onSelect={setActiveTab}>
          <Nav.Item>
            <Nav.Link 
              eventKey="creators" 
              active={activeTab === 'creators'}
              className={activeTab === 'creators' ? 'active' : ''}
            >
              For Creators & Organizations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              eventKey="sponsors" 
              active={activeTab === 'sponsors'}
              className={activeTab === 'sponsors' ? 'active' : ''}
            >
              For Sponsors & Foundations
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {activeTab === 'creators' && (
          <div className="active-opportunities mb-5">
            <h2 className="section-title">Active Pittsburgh Opportunities</h2>
            <div className="opportunities-timeline">
              {pittsburghOpportunities.map((funder, index) => (
                <div key={index} className="funder-section mb-4">
                  <div className="funder-header">
                    <h3 className="funder-name">{funder.funder}</h3>
                    <img 
                      src={index === 0 
                        ? "https://images.unsplash.com/photo-1573164713714-d95466776fb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                        : index === 1 
                        ? "https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                        : "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                      }
                      alt={funder.funder} 
                      className="funder-image"
                    />
                  </div>
                  <Row>
                    {funder.opportunities.map((opp, oppIndex) => (
                      <Col md={6} key={oppIndex} className="mb-4">
                        <Card className="opportunity-card">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <h4 className="opportunity-title">{opp.title}</h4>
                              <Badge 
                                bg="primary" 
                                className="deadline-badge"
                              >
                                Deadline: {new Date(opp.deadline).toLocaleDateString()}
                              </Badge>
                            </div>
                            <div className="opportunity-meta mb-3">
                              <span className="amount">Amount: {opp.amount}</span>
                              <span className="focus">Focus: {opp.focus}</span>
                            </div>
                            <p className="opportunity-description">{opp.description}</p>
                            <Button 
                              className="opportunity-btn"
                              onClick={() => handleResourceClick({
                                title: opp.title,
                                description: opp.description,
                                link: opp.link,
                                fileSize: '1.2 MB'
                              })}
                            >
                              View Details & Apply
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </div>
          </div>
        )}

        {resources[activeTab].map((section, index) => (
          <div key={index} className="resource-section mb-5">
            <div className="section-header">
              <h2 className="section-title mb-4">{section.category}</h2>
              {section.category === 'Pittsburgh Funding Opportunities' && (
                <img 
                  src="https://images.unsplash.com/photo-1569937756447-1d44f657dc69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Pittsburgh Skyline" 
                  className="section-image"
                />
              )}
            </div>
            <Row>
              {section.items.map((item, itemIndex) => (
                <Col lg={4} md={6} key={itemIndex} className="mb-4">
                  <Card className="resource-card h-100">
                    <Card.Body>
                      <div className="resource-type">{item.type}</div>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div className="resource-meta">
                        <span className="file-size">Size: {item.fileSize}</span>
                      </div>
                      <Button 
                        className="resource-download-btn"
                        onClick={() => handleResourceClick(item)}
                      >
                        Download Resource
                        <i className="fas fa-download ms-2"></i>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        <div className="support-section text-center mt-5" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <h2>Need Additional Support?</h2>
          <p className="mb-4">
            Our local team of experts is available for personalized guidance on Pittsburgh funding opportunities.
            Schedule a consultation to discuss your specific needs.
          </p>
          <Row className="justify-content-center">
            <Col md={6}>
              <Button className="btn-consultation">
                Schedule Free Consultation
              </Button>
            </Col>
          </Row>
        </div>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedResource && (
            <>
              <h5>{selectedResource.title}</h5>
              <p>{selectedResource.description}</p>
              <p className="mb-4">File size: {selectedResource.fileSize}</p>
              <div className="text-center">
                <Button 
                  href={selectedResource.link} 
                  className="download-btn"
                  download
                >
                  Start Download
                  <i className="fas fa-download ms-2"></i>
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Resources; 