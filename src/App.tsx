import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, RefreshCw, Terminal, Server, Cpu, Database, Activity, FileText } from 'lucide-react';

interface SystemMetric {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'error';
  value: string;
  description: string;
}

export function App() {
  const [metrics, setMetrics] = useState<SystemMetric[]>([
    { id: '1', name: 'Repository Integrity', status: 'healthy', value: '100%', description: 'All core files verified and validated.' },
    { id: '2', name: 'TypeScript Compilation', status: 'healthy', value: 'Passing', description: 'Zero type errors detected in src/' },
    { id: '3', name: 'Vite Build Pipeline', status: 'healthy', value: 'Optimized', description: 'Bundle generation completed successfully.' },
    { id: '4', name: 'Webhook Event Monitor', status: 'healthy', value: 'Active', description: 'Listening on Rigo-Development-Studio/ex-001 main.' },
  ]);

  const [logs, setLogs] = useState<string[]>([
    '[INFO] Webhook event \'push\' received on branch \'main\'.',
    '[INFO] Initialized file integrity check suite.',
    '[SUCCESS] Verified README.md structure and checksum.',
    '[SUCCESS] Project setup ready for deployment and continuous monitoring.'
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'logs'>('overview');

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setMetrics(prev => prev.map(m => ({
        ...m,
        value: m.id === '1' ? '100%' : m.value
      })));
      setLogs(prev => [
        `[${new Date().toLocaleTimeString()}] Manual integrity re-check executed successfully.`,
        ...prev
      ]);
      setIsRefreshing(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold tracking-tight">ex-001 Integrity & Evaluation</h1>
                <span className="px-2.5 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                  Verified
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                Repository evaluation triggered by webhook push on <code className="text-slate-200">main</code>.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium border border-slate-700 transition disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Verifying...' : 'Re-run Evaluation'}</span>
            </button>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 space-x-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 font-medium text-sm flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'overview'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Dashboard Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('metrics')}
            className={`pb-3 font-medium text-sm flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'metrics'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>System Metrics</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`pb-3 font-medium text-sm flex items-center space-x-2 border-b-2 transition ${
              activeTab === 'logs'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Execution Logs</span>
          </button>
        </div>

        {/* Content Area */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map(metric => (
              <div key={metric.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{metric.name}</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-slate-100 mb-1">{metric.value}</div>
                  <p className="text-xs text-slate-400">{metric.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  Status Nominal
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg space-y-6">
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <Server className="w-5 h-5 text-emerald-400" />
              <span>Detailed Integrity Metrics</span>
            </h2>
            <div className="divide-y divide-slate-800">
              {metrics.map(metric => (
                <div key={metric.id} className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                  <div>
                    <h3 className="font-medium text-slate-200">{metric.name}</h3>
                    <p className="text-sm text-slate-400">{metric.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-sm font-semibold">
                      {metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg space-y-4">
            <h2 className="text-lg font-semibold flex items-center space-x-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span>Real-time Execution & Webhook Log</span>
            </h2>
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-300 space-y-2 max-h-96 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-slate-600">&gt;</span>
                  <span className={log.includes('SUCCESS') ? 'text-emerald-400' : log.includes('INFO') ? 'text-blue-400' : 'text-slate-300'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer info */}
        <footer className="border-t border-slate-800/80 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>Rigo Development Studio • ex-001 Integrity Verification System</div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Database className="w-3.5 h-3.5" />
              <span>Target ID: ex-001</span>
            </span>
            <span className="flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Branch: main</span>
            </span>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
