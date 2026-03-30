import React from 'react';
import styled from 'styled-components';
import { Movie } from '../data/mockData';

const CardContainer = styled.div`
  flex: 0 0 auto;
  width: 280px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  background-color: var(--card-bg);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), 
              box-shadow 0.3s cubic-bezier(0.2, 0.8, 0.2, 1),
              border 0.3s;
  border: 3px solid transparent;
  position: relative;

  &:focus, &:hover {
    transform: scale(1.08);
    border-color: var(--focus-border);
    box-shadow: 0 15px 40px var(--focus-shadow);
    z-index: 50;
    outline: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 9px;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: -35px;
  left: 0;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  transform: translateY(-10px);
  color: white;

  ${CardContainer}:hover &,
  ${CardContainer}:focus & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card: React.FC<{ movie: Movie; onFocusMovie: (m: Movie) => void }> = ({ movie, onFocusMovie }) => {
  return (
    <CardContainer 
      tabIndex={0} 
      onFocus={() => onFocusMovie(movie)}
      onMouseEnter={() => onFocusMovie(movie)}
    >
      <img src={movie.image} alt={movie.title} loading="lazy" />
      <Title>{movie.title}</Title>
    </CardContainer>
  );
};
