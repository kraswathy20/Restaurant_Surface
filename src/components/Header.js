import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://assets.website-files.com/5ebb5bc532a9e1f3e8b6274d/5ebd8fadf0db0537458e9125_order%20food%20online%20sedona%20(1).png"
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        <span className='ms-3 mt-4 fs-3'><strong>Restaurant Surface</strong> </span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header