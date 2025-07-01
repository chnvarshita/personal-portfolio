import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.1);     /* Transparent white */
  backdrop-filter: blur(10px);              /* Blur effect */
  -webkit-backdrop-filter: blur(10px);      /* Safari support */
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;                          /* Fix to top */
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background 0.3s ease-in-out;
`;


const NavContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const LogoText = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-left: 8px;
  color: #f26a01; /* SAME orange as icon */
`;


const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const GithubButton = styled.a`
  padding: 8px 16px;
  background: linear-gradient(90deg, #ff758c, #ff7eb3); /* Soft pink */
  color: white;
  font-weight: 600;
  border-radius: 20px;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
  }
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 20px;
  padding-left: 8px;
  color: white;
`;


const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
  <a style={{
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "1.8rem",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #ff8a00, #e52e71)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    transition: "transform 0.3s ease-in-out"
  }}
    onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
  >
    <DiCssdeck size="3rem" style={{ color: "#ff8a00", filter: "drop-shadow(0px 0px 10px #ff8a00)" }} />
    <Span style={{ paddingLeft: "8px", background: "linear-gradient(90deg, #ff8a00, #e52e71)", 
    WebkitBackgroundClip: "text", 
    WebkitTextFillColor: "transparent", 
    fontWeight: "bold" }}>
    Navya Varshita
    </Span>

  </a>
</NavLogo>


        {/* Nav Links */}
        <NavItems>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#skills">Skills</NavLink></li>
          <li><NavLink href="#experience">Experience</NavLink></li>
          <li><NavLink href="#projects">Projects</NavLink></li>
          <li><NavLink href="#education">Education</NavLink></li>
        </NavItems>

        {/* GitHub Button */}
        <GithubButton href="https://github.com/chnvarshita" target="_blank">
          GitHub Profile
        </GithubButton>

        {/* Mobile Icon */}
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
