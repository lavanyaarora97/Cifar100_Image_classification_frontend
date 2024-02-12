// Main.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Main() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let highlightedSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          highlightedSection = section.id;
        }
      });

      setActiveSection(highlightedSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <div className="sidebar">
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="#section1" active={activeSection === 'section1'}>Section 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section2" active={activeSection === 'section2'}>Section 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#section3" active={activeSection === 'section3'}>Section 3</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
        <Col md={9}>
          <div>
            <section id="section1" style={{ height: '500px', backgroundColor: 'lightblue' }}>Section 1 Content</section>
            <section id="section2" style={{ height: '500px', backgroundColor: 'lightgreen' }}>Section 2 Content</section>
            <section id="section3" style={{ height: '500px', backgroundColor: 'lightcoral' }}>Section 3 Content</section>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
