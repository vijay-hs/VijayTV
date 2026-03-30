import React from 'react';
import { useParams } from 'react-router-dom';
import { mockMovies } from '../data/mockData';
import styled from 'styled-components';

const DetailContainer = styled.div`
  background: var(--bg-color);
  color: var(--text-primary);
  min-height: 100vh;
  padding: var(--spacing-side);
`;

export const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movie = mockMovies.find(m => m.id === Number(id));

  if (!movie) {
    return <DetailContainer>Movie not found.</DetailContainer>;
  }

  return (
    <DetailContainer>
      <h1>{movie.title}</h1>
      <p>{movie.desc}</p>
      <video controls style={{ width: '100%', maxHeight: '60vh', objectFit: 'cover' }}>
        <source src={movie.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </DetailContainer>
  );
};
