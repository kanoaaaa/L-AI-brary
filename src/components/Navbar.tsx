'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#ADD8E6', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0, color: '#004080', fontSize: '1.5rem', fontWeight: 'bold' }}>L(AI)brary</h1>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 1rem' }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#004080' }}>
            Home
          </Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link href="/instructional-videos" style={{ textDecoration: 'none', color: '#004080' }}>
            Instructional Videos
          </Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link href="/ai-literacy" style={{ textDecoration: 'none', color: '#004080' }}>
            AI Literacy
          </Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link href="/techniques" style={{ textDecoration: 'none', color: '#004080' }}>
            Techniques
          </Link>
        </li>
        <li style={{ margin: '0 1rem' }}>
          <Link href="/practice" style={{ textDecoration: 'none', color: '#004080' }}>
            Practice
          </Link>
        </li>
      </ul>
    </nav>
  );
}
