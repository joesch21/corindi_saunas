import React, { useState } from 'react';
import images from '../lib/images.js';

function SaunaGallery() {
  const [filter, setFilter] = useState('');

  const categories = ['All', ...Array.from(new Set(images.map((img) => img.category)))];

  const filteredImages =
    filter === 'All' ? images : images.filter((img) => img.category === filter);

  return (
    <section style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={{
              marginRight: '0.5rem',
              padding: '0.5rem 1rem',
              border: '1px solid #ccc',
              background: cat === filter ? '#eee' : '#fff',
              cursor: 'pointer',
            }}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {filteredImages.map(({ public_path, title }, index) => (
          <div key={index}>
            <img
              src={public_path}
              alt={title || 'Sauna image'}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {title && (
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>{title}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SaunaGallery;
