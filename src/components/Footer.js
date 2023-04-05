import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
        <Row>
            <Col className='text-center bg-dark'>
                <p>All right reserved to <strong>Restaurant Surface </strong>&reg:2023</p>
            </Col>
        </Row>
    </div>
  )
}

export default Footer