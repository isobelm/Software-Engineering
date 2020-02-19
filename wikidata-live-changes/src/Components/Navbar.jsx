import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavbarLocal extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Collapse>
					<Nav>
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/page">
							Page
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default NavbarLocal
