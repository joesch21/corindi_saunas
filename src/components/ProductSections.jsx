import React from 'react';

const sections = [
  {
    title: 'Traditional Sauna',
    description:
      'Experience the classic heat therapy with our traditional saunas, promoting relaxation and detoxification.',
  },
  {
    title: 'Infrared Sauna',
    description:
      'Enjoy deep penetration heat with our infrared saunas, designed to soothe muscles and improve circulation.',
  },
  {
    title: 'Cold Plunge',
    description:
      'Refresh and invigorate with a cold plunge, perfect for recovery and boosting your immune system.',
  },
  {
    title: 'Red Light Therapy',
    description:
      'Stimulate collagen production and promote healing with our state-of-the-art red light therapy sessions.',
  },
];

function ProductSections() {
  return (
    <section style={{ padding: '2rem' }}>
      {sections.map(({ title, description }) => (
        <div key={title} style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h2>
          <p style={{ color: '#444' }}>{description}</p>
        </div>
      ))}
    </section>
  );
}

export default ProductSections;
