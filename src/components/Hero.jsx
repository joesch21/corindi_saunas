import React from 'react';

function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '4rem 1rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        Corindi Saunas
      </h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#444' }}>
        Website Under Construction
      </h2>
      <p style={{ fontSize: '1.125rem', maxWidth: '480px', color: '#555' }}>
        We&apos;re still building our new online home. In the meantime, you can
        reach us at{' '}
        <a href="mailto:info@corindisaunas.com.au">
          info@corindisaunas.com.au
        </a>
        .
      </p>
    </section>
  );
}

export default Hero;
