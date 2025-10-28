import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.css';
import { queryClient } from './lib/queryClient';
import './i18n/config'; // Initialize i18n

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML = '<div style="padding: 20px; text-align: center; background: #f00; color: white; min-height: 100vh;"><h1>Error: Root element not found</h1><p>Please refresh the page.</p></div>';
} else {
  try {
    createRoot(rootElement).render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('Failed to render app:', error);
    rootElement.innerHTML = '<div style="padding: 20px; text-align: center; background: #f44; color: white; min-height: 100vh;"><h1>Error loading app</h1><p>' + errorMsg + '</p><button onclick="window.location.reload()" style="padding: 10px 20px; font-size: 16px; margin-top: 20px; cursor: pointer;">Reload Page</button></div>';
  }
}
