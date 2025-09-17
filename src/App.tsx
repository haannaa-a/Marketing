import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(<StrictMode></StrictMode>);
} else {
  console.error('Root container missing in HTML');
}
