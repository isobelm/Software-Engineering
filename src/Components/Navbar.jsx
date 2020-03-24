import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavbarLocal extends Component {
  constructor(props) {
    super(props)
    this.state = { history: this.props.history }
  }
  render() {
    // var isActive = this.context.router.route.location.pathname
    let activePage = window.location.href
    return (
      <Navbar>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              className={
                activePage.endsWith('/') ? 'nav-link--active' : 'nav-link'
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/page"
              className={
                activePage.endsWith('/page') ? 'nav-link--active' : 'nav-link'
              }
            >
              Page
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/feed"
              className={
                activePage.endsWith('/feed') ? 'nav-link--active' : 'nav-link'
              }
            >
              Feed
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarLocal
