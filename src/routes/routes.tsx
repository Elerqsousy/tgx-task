import Character from './Character';
import Home from '@/routes/Home';

// Type for a single route entry
export interface AppRoute {
  path: string;
  element: JSX.Element;
  children?: AppRoute[];
}

export const appRoutes: AppRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <Character />,
  },
];
