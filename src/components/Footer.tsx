'use client';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ADD8E6', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
      <p style={{ color: '#004080', margin: 0 }}>
        © {new Date().getFullYear()} L-AI-brary. All Rights Reserved.
      </p>
    </footer>
  );
}
