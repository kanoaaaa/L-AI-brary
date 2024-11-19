'use client';
import { useState } from 'react';

export default function Sandbox() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setResponse(data.text);
    } catch (error) {
      setResponse('Error fetching response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '32px', color: '#4682B4' }}>ChatGPT Sandbox</h1>
      <p style={{ fontSize: '18px', color: '#6A5ACD', marginBottom: '20px' }}>
        Experiment with prompt engineering and see the AI's responses in real-time.
      </p>
      <form onSubmit={handleSubmit} style={{ margin: '20px auto', maxWidth: '600px' }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt here..."
          style={{
            width: '100%',
            height: '120px',
            padding: '12px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        ></textarea>
        <br />
        <button
          type="submit"
          style={{
            marginTop: '10px',
            padding: '12px 24px',
            backgroundColor: '#4682B4',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Submit
        </button>
      </form>
      {loading && <p style={{ fontSize: '18px', color: '#999' }}>Loading...</p>}
      {response && <p style={{ marginTop: '20px', fontSize: '18px', whiteSpace: 'pre-wrap' }}>{response}</p>}
    </div>
  );
}
