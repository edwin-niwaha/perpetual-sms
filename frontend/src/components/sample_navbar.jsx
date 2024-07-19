import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import useUser from '../hooks/useUser';
import "../styles/TopBar.css";
import logo from '../assets/logo.png';

const NavBar = () => {
    const user = useUser();

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarNav>
                    <MDBNavbarItem>
                        <a href="/" className='navbar-brand'>
                            <img src={logo} alt="Logo" className="logo-img" style={{ maxHeight: '40px' }} />SDMS
                        </a>
                    </MDBNavbarItem>

                    {user && (
                        <>
                            <MDBNavbarItem>
                                <a href="/dashboard" className='nav-link'>
                                    Dashboard
                                </a>
                            </MDBNavbarItem>
                        </>
                    )}

                    <MDBNavbarItem>
                        <MDBDropdown>
                            <MDBDropdownToggle tag='a' className='nav-link'>
                                Dropdown Link
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>
                                    <a className="dropdown-item" href="#">Action</a>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <a className="dropdown-item" href="#">Submenu &raquo;</a>
                                    <ul className="dropdown-menu dropdown-submenu">
                                        <MDBDropdownItem>
                                            <a className="dropdown-item" href="#">Submenu item 1</a>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem>
                                            <a className="dropdown-item" href="#">Submenu item 3 &raquo;</a>
                                            <ul className="dropdown-menu dropdown-submenu">
                                                <MDBDropdownItem>
                                                    <a className="dropdown-item" href="#">Multi level 1</a>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <a className="dropdown-item" href="#">Multi level 2</a>
                                                </MDBDropdownItem>
                                            </ul>
                                        </MDBDropdownItem>
                                    </ul>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavbarItem>

                </MDBNavbarNav>
                <MDBNavbarNav className='ms-auto'>
                    {!user ? (
                        <>
                            <MDBNavbarItem>
                                <a href="/login" className='nav-link'>
                                    Login
                                </a>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <a href="/register" className='nav-link'>
                                    Register
                                </a>
                            </MDBNavbarItem>
                        </>
                    ) : (
                        <MDBNavbarItem>
                            <a href="/logout" className='nav-link'>
                                Logout
                            </a>
                        </MDBNavbarItem>
                    )}
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default NavBar;
