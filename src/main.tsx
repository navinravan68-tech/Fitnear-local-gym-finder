import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for "Cannot set property fetch of #<Window> which has only a getter"
// and other environment-related errors
if (typeof window !== 'undefined') {
  (window as any).global = window;
  // Ensure process.env exists for libraries that check it
  (window as any).process = (window as any).process || { env: {} };
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
