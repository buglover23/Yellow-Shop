import React from 'react'
import { Col, Row } from 'react-bootstrap';

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Row>
        <Col className='text-center py-3' style={{ backgroundColor: '#ffebef' }}>
          <p>Yellowstore.th &copy; {currentYear}</p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer