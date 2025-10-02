import { Routes, Route } from 'react-router-dom';

import { AppRoute, appRoutes } from './routes';
import PageUI from '@/components/ui/PageUI';

const renderRoutes = (routes: AppRoute[]) =>
  routes.map(({ path, element, children }) => (
    <Route key={path} path={path} element={<PageUI>{element}</PageUI>}>
      {!!children && renderRoutes(children)}
    </Route>
  ));

const AppRoutes = () => {
  return <Routes>{renderRoutes(appRoutes)}</Routes>;
};

export default AppRoutes;
