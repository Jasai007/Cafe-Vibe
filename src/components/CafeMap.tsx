import * as React from 'react';

const CafeMap = () => (
  <div style={{ width: '100%', height: 400, borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
    <iframe
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      src="https://www.google.com/maps?q=123+Coffee+Street,+Seattle,+WA+98101&output=embed"
      allowFullScreen
      aria-hidden="false"
      tabIndex={0}
      title="Brew Haven Location"
    ></iframe>
  </div>
);

export default CafeMap;
