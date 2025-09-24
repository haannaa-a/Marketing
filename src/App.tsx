import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/tailwind.css';
import FeaturesSectionGrid from './components/FeaturesSectionGrid/FeaturesSectionGrid.tsx';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <BrowserRouter basename="/Marketing">
        <Routes>
          <Route path="/" element={<FeaturesSectionGrid />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error('Root container missing in HTML');
}
