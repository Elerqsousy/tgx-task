import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';
import Breadcrumb from '@/components/ui/Breadcrumb';

function App() {
  return (
    <BrowserRouter basename="/tgx-task">
      <div className="h-screen flex flex-col max-h-screen overflow-hidden">
        <Breadcrumb />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
