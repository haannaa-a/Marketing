import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/tailwind.css';
import PricingSectionTiers from './components/PricingSectionTiers/PricingSectionTiers.tsx';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <BrowserRouter basename="/Marketing">
        <Routes>
          <Route path="/" element={<PricingSectionTiers />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error('Root container missing in HTML');
}
