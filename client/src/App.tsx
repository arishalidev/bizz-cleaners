import { useState, useEffect } from 'react';
import './App.css';

interface HelloResponse {
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

function App() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const checkConnection = async () => {
    setStatus('loading');
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/hello');

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data: HelloResponse = await response.json();
      setMessage(data.message);
      setStatus('success');
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMsg);
      setStatus('error');
    }
  };

  // Auto-check on mount
  useEffect(() => {
    checkConnection();
  }, []);

  return (
      <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Server Status</h1>

        <div style={{ marginTop: '1rem' }}>
          <strong>Status:</strong>{' '}
          {status === 'idle' && <span>Not checked yet</span>}
          {status === 'loading' && <span style={{ color: '#888' }}>Checking…</span>}
          {status === 'success' && <span style={{ color: 'green' }}>✓ Connected</span>}
          {status === 'error' && <span style={{ color: 'red' }}>✗ Failed</span>}
        </div>

        {message && (
            <div style={{ marginTop: '1rem' }}>
              <strong>Server says:</strong> {message}
            </div>
        )}

        {error && (
            <div style={{ marginTop: '1rem', color: 'red' }}>
              <strong>Error:</strong> {error}
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Make sure the server is running on port 3000 and the Vite proxy is configured.
              </p>
            </div>
        )}

        <button
            onClick={checkConnection}
            disabled={status === 'loading'}
            style={{
              marginTop: '1.5rem',
              padding: '0.5rem 1rem',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            }}
        >
          Test Again
        </button>
      </div>
  );
}

export default App;