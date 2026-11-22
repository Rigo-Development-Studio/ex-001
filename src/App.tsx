import React, { useState } from 'react';

interface Metric {
  id: string;
  name: string;
  status: 'passed' | 'warning' | 'failed';
  score: number;
  details: string;
}

export default function App() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { id: '1', name: 'Repository Structure', status: 'passed', score: 100, details: 'All expected configuration files present.' },
    { id: '2', name: 'TypeScript Integrity', status: 'passed', score: 98, details: 'Type checking passed with strict configuration.' },
    { id: '3', name: 'CI/CD Workflow Status', status: 'passed', score: 95, details: 'Automated evaluation hooks configured successfully.' },
    { id: '4', name: 'Dependency Vulnerability Check', status: 'warning', score: 85, details: 'Minor advisories detected in transitive dependencies.' },
  ]);

  const [filter, setFilter] = useState<string>('all');

  const filteredMetrics = metrics.filter(m => filter === 'all' || m.status === filter);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #444', paddingBottom: '1rem' }}>
        <h1 style={{ margin: '0 0 0.5rem 0', color: '#61dafb' }}>ex-001 Evaluation Dashboard</h1>
        <p style={{ margin: 0, color: '#aaa' }}>Monitoring project health, repository integrity, and recent webhook events.</p>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
        <strong>Filter Status:</strong>
        {['all', 'passed', 'warning', 'failed'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: '4px',
              border: 'none',
              background: filter === status ? '#61dafb' : '#333',
              color: filter === status ? '#222' : '#fff',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {status}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredMetrics.map(metric => (
          <div key={metric.id} style={{ background: '#1e1e1e', border: '1px solid #333', borderRadius: '8px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{metric.name}</h3>
              <span style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                background: metric.status === 'passed' ? 'rgba(46, 160, 67, 0.2)' : metric.status === 'warning' ? 'rgba(187, 128, 9, 0.2)' : 'rgba(218, 54, 51, 0.2)',
                color: metric.status === 'passed' ? '#3fb950' : metric.status === 'warning' ? '#d29922' : '#f85149'
              }}>
                {metric.status.toUpperCase()} ({metric.score}%)
              </span>
            </div>
            <p style={{ margin: 0, color: '#ccc', fontSize: '0.95rem' }}>{metric.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
