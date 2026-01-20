import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import ScrollToTop from './components/ScrollToTop';

// Simple ScrollToTop component to ensure pages start at the top
const ScrollToTopHandler = () => {
  const { pathname } = React.useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Create a separate component file if preferred, but inline here for simplicity since we don't have a components folder structure fully defined yet for this helper
const ScrollToTopWrapper = () => (
  <ScrollToTopHandler />
);

function App() {
  return (
    <Router>
      {/* We can't use useLocation inside Router directly without a child component, so we just do it inside the Routes or a wrapper. 
            Actually, with React Router v6, we can make a wrapper.
            But simpler: just let individual pages handle scroll or use a wrapper.
         */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
