import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/tailwind.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoudary.tsx';
import CookieConsentComponent from './components/CookieConsentComponent/CookieConsentComponent.tsx';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter basename="/Marketing">
          <Routes>
            <Route path="/" element={<CookieConsentComponent />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>,
  );
} else {
  console.error('Root container missing in HTML');
}
