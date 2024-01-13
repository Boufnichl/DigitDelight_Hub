import React, { Component } from 'react'
import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <a href="https://wa.me/212684507557" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
               <ul className="navbar-nav align-items-center">
               <li className="nav-item ml-5">
                        <StyledLink to="/" className="nav-link">
                            DigitDelight Hub
                        </StyledLink>
                    </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
.whatsapp-icon {
    color: #25D366;
    margin-left: 1rem;
}
`;

const StyledLink = styled(Link)`
    font-family: 'Arial', sans-serif; // Example: Custom font
    font-size: 1.5rem; // Slightly larger font size
    font-weight: bold; // Bold font
    color: var(--mainYellow); // Custom color
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--lightYellow); // Color change on hover
        text-decoration: none; // Removes underline on hover
    }
`;