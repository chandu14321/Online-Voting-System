import React from 'react';

import ErrorMessage from '../components/ErrorMessage';
import Polls from '../components/Polls';

const HomePage = props => (
  <div className="container">
    <section
      style={{
        paddingTop: '5rem',
        textAlign: 'center',
      }}>
      <h1
        style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          letterSpacing: '-3px',
        }}>
        Modern Voting Platform
      </h1>

      <p
        style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          maxWidth: '700px',
          margin: 'auto',
          lineHeight: '1.8',
        }}>
        Create polls, collect votes, and visualize results in a clean modern
        interface inspired by Apple's minimalist design language.
      </p>
    </section>

    <ErrorMessage />
    <Polls {...props} />
  </div>
);

export default HomePage;
