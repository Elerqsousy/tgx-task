import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';
import Breadcrumb from '@/components/ui/Breadcrumb';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="h-screen flex flex-col max-h-screen overflow-hidden">
          <Breadcrumb />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
