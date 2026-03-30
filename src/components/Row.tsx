import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { Category, Movie } from '../data/mockData';

const RowContainer = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  padding-left: var(--spacing-side);
  color: var(--text-primary);
`;

const Posters = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: visible;
  padding: 10px var(--spacing-side);
  gap: 20px;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Row: React.FC<{ category: Category; onFocusMovie: (m: Movie) => void }> = ({ category, onFocusMovie }) => {
  return (
    <RowContainer>
      <Title>{category.title}</Title>
      <Posters>
        {category.items.map(movie => (
          <Card key={movie.id} movie={movie} onFocusMovie={onFocusMovie} />
        ))}
      </Posters>
    </RowContainer>
  );
};
