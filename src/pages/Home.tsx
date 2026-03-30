import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Row } from '../components/Row';
import { mockCategories, mockMovies, Movie } from '../data/mockData';

export const Home: React.FC = () => {
  const [heroMovie, setHeroMovie] = useState<Movie>(mockMovies[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      <Hero movie={heroMovie} />
      <div style={{ marginTop: '-10vh', position: 'relative', zIndex: 20 }}>
        {mockCategories.map(cat => (
          <Row key={cat.id} category={cat} onFocusMovie={setHeroMovie} />
        ))}
      </div>
    </div>
  );
};
