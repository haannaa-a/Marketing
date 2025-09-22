import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FeaturesSection from './components/FeaturesSection/FeaturesSection.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/tailwind.css';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <BrowserRouter basename="/Marketing">
        <Routes>
          <Route path="/" element={<FeaturesSection isRightInPath={false} />} />
          <Route
            path="/right"
            element={<FeaturesSection isRightInPath={true} />}
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  console.error('Root container missing in HTML');
}
