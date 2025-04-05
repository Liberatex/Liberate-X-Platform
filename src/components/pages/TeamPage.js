import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TeamPage.css';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Founder & CEO",
      bio: "Passionate about empowering creative communities and fostering artistic innovation.",
      image: "/team/member1.jpg"
    },
    {
      name: "Team Member 2",
      role: "Creative Director",
      bio: "Leading the vision for creative initiatives and community engagement.",
      image: "/team/member2.jpg"
    },
    {
      name: "Team Member 3",
      role: "Community Manager",
      bio: "Building bridges between artists, organizations, and funding partners.",
      image: "/team/member3.jpg"
    }
  ];

  return (
    <div className="team-page">
      <div className="team-hero">
        <Container>
          <h1>OUR TEAM</h1>
          <p>Meet the passionate individuals behind Liberate X</p>
        </Container>
      </div>

      <Container className="team-content">
        <Row className="mission-section">
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              At Liberate X, we're dedicated to revolutionizing how creative projects
              are funded and supported. Our team brings together expertise in arts,
              technology, and community building to create meaningful connections
              between visionary artists and supportive organizations.
            </p>
          </Col>
          <Col md={6}>
            <div className="mission-image">
              <img src="/team/mission.jpg" alt="Team collaboration" />
            </div>
          </Col>
        </Row>

        <div className="team-members">
          <h2>Meet Our Team</h2>
          <Row>
            {teamMembers.map((member, index) => (
              <Col md={4} key={index}>
                <div className="team-member-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.bio}</p>
                  <div className="social-links">
                    <a href="#" className="linkedin">LinkedIn</a>
                    <a href="#" className="twitter">Twitter</a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="join-team">
          <h2>Join Our Team</h2>
          <p>
            We're always looking for passionate individuals who want to make a
            difference in the creative community. Check out our open positions
            and become part of our mission.
          </p>
          <button className="btn-primary">View Open Positions</button>
        </div>
      </Container>
    </div>
  );
};

export default TeamPage; 