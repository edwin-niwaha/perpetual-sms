import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBoxArrowRight } from 'react-icons/bs';
import useUser from '../hooks/useUser';
import logo from '../assets/logo.png';

const NavBar = () => {
    const user = useUser();

    return (
        <Navbar bg="light" expand={false} style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        height="30"
                        className="d-inline-block align-top"
                        style={{ marginRight: '10px' }}
                    />
                    SDMS
                </Navbar.Brand>
                {user && (
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                )}
                {!user && (
                    <Nav className="ms-auto flex-row">
                        <Button variant="outline-primary" href="/login" className="me-2">Sign In</Button>
                        <Button variant="outline-primary" href="/register" className="me-2">Register</Button>
                    </Nav>
                )}
                {user && (
                    <>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas style={{ width: '20%' }} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">--- SDMS ---</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <hr style={{ color: 'blue', backgroundColor: 'blue', height: 1 }} />
                                    <NavDropdown title="Manage Child" id="manageChildDropdown">
                                        <NavDropdown.Item href="/register_child">Register Child</NavDropdown.Item>
                                        <NavDropdown.Item href="/child_master_list">Child Details</NavDropdown.Item>
                                        <NavDropdown.Item href="/update_picture">Profile Picture</NavDropdown.Item>
                                        <NavDropdown.Item href="/child_progress">Child Progress</NavDropdown.Item>
                                        <NavDropdown.Item href="/child_correspondence">Correspondence</NavDropdown.Item>
                                        <NavDropdown.Item href="/child_incident">Child Incidence</NavDropdown.Item>
                                        <NavDropdown.Item href="/child_departure">Child Departure</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Manage Staff" id="manageStaffDropdown">
                                        <NavDropdown.Item href="/register_staff">Register Staff</NavDropdown.Item>
                                        <NavDropdown.Item href="/staff_list">Staff Details</NavDropdown.Item>
                                        <NavDropdown.Item href="/staff_departure">Staff Departure</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Manage Sponsor" id="manageSponsorDropdown">
                                        <NavDropdown.Item href="/register_sponsor">Register Sponsor</NavDropdown.Item>
                                        <NavDropdown.Item href="/sponsor_list">Sponsor Details</NavDropdown.Item>
                                        <NavDropdown.Item href="/sponsor_departure">Sponsor Departure</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Sponsorship" id="sponsorshipDropdown">
                                        <NavDropdown.Item href="/child_sponsorship">Child Sponsorship</NavDropdown.Item>
                                        <NavDropdown.Item href="/staff_sponsorship_create">Staff Sponsorship</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Contributions" id="contributionsDropdown">
                                        <NavDropdown.Item href="/child_sponsor_payment">Child Contributions</NavDropdown.Item>
                                        <NavDropdown.Item href="/staff_sponsor_payment">Staff Contributions</NavDropdown.Item>
                                    </NavDropdown>

                                    <hr style={{ color: 'blue', backgroundColor: 'blue', height: 1 }} />
                                    <NavDropdown title="Extras" id="extrasDropdown">
                                        <NavDropdown.Item href="#action3">Clients</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">Policies</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">E-books</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">Manual</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Reports" id="reportsDropdown">
                                        <NavDropdown.Item href="#action3">Individual</NavDropdown.Item>
                                        <NavDropdown.Item href="#action3">General</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Settings" id="settingsDropdown">
                                        <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Feedback</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Bulk Import</NavDropdown.Item>
                                    </NavDropdown>

                                    <hr style={{ color: 'blue', backgroundColor: 'blue', height: 1 }} />
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/logout">
                                        Logout <BsBoxArrowRight style={{ marginLeft: '5px', fontSize: '1rem' }} />
                                    </NavDropdown.Item>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </>
                )}
            </Container>
        </Navbar>
    );
}

export default NavBar;
