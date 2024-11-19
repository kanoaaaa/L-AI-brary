export default function InstructionalVideo() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Instructional Video</h1>
        <iframe
          src="https://www.youtube.com/embed/your-video-id"
          title="Instructional Video"
          width="80%"
          height="400px"
          style={{ marginTop: '20px', borderRadius: '8px' }}
        ></iframe>
      </div>
    );
  }
  