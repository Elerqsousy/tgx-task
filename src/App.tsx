import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Breadcrumb from '@/components/ui/Breadcrumb';

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <Breadcrumb />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
