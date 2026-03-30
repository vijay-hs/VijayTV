import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Movie } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const HeroContainer = styled.header`
  position: relative;
  height: 85vh;
  min-height: 600px;
  width: 100%;
`;

const Background = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--bg-color) 0%, rgba(11,12,16,0.3) 60%, transparent 100%),
              linear-gradient(to top, var(--bg-color) 0%, transparent 40%);
  z-index: 2;
`;

const Content = styled.div`
  position: absolute;
  bottom: 12%;
  left: var(--spacing-side);
  max-width: 650px;
  z-index: 10;
`;

export const Hero: React.FC<{ movie: Movie }> = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <AnimatePresence>
        <Background
          key={movie.id}
          src={movie.bg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <Overlay />
      <Content>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '15px' }}>{movie.title}</h1>
        <p style={{ fontSize: '1.15rem', color: '#ccc', marginBottom: '24px' }}>{movie.desc}</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ padding: '14px 32px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', border: '3px solid transparent', background: 'var(--primary-btn)', color: 'var(--primary-btn-text)' }} tabIndex={0} onFocus={(e) => {e.target.style.borderColor='var(--focus-border)';}} onBlur={(e) => {e.target.style.borderColor='transparent';}} onClick={() => navigate(`/movie/${movie.id}`)}>Play</button>
          <button style={{ padding: '14px 32px', borderRadius: '30px', background: 'var(--secondary-btn)', color: 'white', border: '3px solid transparent', cursor: 'pointer' }} tabIndex={0} onFocus={(e) => {e.target.style.borderColor='var(--focus-border)';}} onBlur={(e) => {e.target.style.borderColor='transparent';}}>More Info</button>
        </div>
      </Content>
    </HeroContainer>
  );
};
