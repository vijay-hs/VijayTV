import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px var(--spacing-side);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(11, 12, 16, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(12px)' : 'none'};
  transition: all 0.3s ease;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
`;

const NavItem = styled(NavLink)`
  font-size: 17px;
  font-weight: 400;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 30px;
  transition: all 0.2s;
  border: 3px solid transparent;

  &.active {
    color: var(--text-primary);
    font-weight: 500;
  }
  
  &:focus {
    border-color: var(--focus-border);
    outline: none;
  }
  
  &:focus, &:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }
`;

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavContainer scrolled={scrolled}>
      <div><h2 style={{color: 'var(--focus-border)', fontWeight: 'bold'}}>KANNADA TV</h2></div>
      <NavLinks>
        <li><NavItem to="/" tabIndex={0}>Home</NavItem></li>
        <li><NavItem to="/serials" tabIndex={0}>Serials</NavItem></li>
        <li><NavItem to="/reality" tabIndex={0}>Reality Shows</NavItem></li>
        <li><NavItem to="/live" tabIndex={0}>Live TV</NavItem></li>
      </NavLinks>
      <div><div tabIndex={0} style={{width: 44, height: 44, borderRadius: '50%', background: 'grey', border: '3px solid transparent', cursor: 'pointer'}} onFocus={(e) => {e.target.style.borderColor='var(--focus-border)';}} onBlur={(e) => {e.target.style.borderColor='transparent';}}></div></div>
    </NavContainer>
  );
};
