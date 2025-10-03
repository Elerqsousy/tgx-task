import { FC } from 'react';

import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, To, useLocation, useNavigate } from 'react-router-dom';

import Button from './Button';

const ConditionalLink: FC<{
  condition: boolean;
  text: string;
  to: To;
}> = ({ condition, to, text }) => {
  return condition ? (
    <Link to={to} className="capitalize hover:text-blue-600">
      {decodeURIComponent(text)}
    </Link>
  ) : (
    <span className="capitalize font-medium text-gray-900">
      {decodeURIComponent(text)}
    </span>
  );
};

const Breadcrumb: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split('/').filter(Boolean);

  const parentPath =
    pathnames.length > 0 ? `/${pathnames.slice(0, -1).join('/')}` : null;

  const handleBack = () => {
    navigate(parentPath || '/');
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <Button
        text="Back"
        onClick={handleBack}
        disabled={!parentPath}
        startIcon={<ArrowLeft className="w-4 h-4 mr-1" />}
      />

      <nav aria-label="breadcrumb">
        <ol className="flex items-center text-sm text-gray-600">
          <li>
            <ConditionalLink
              to="/"
              text="Home"
              condition={!!pathnames.length}
            />
          </li>

          {pathnames.map((value, idx) => {
            const to = `/${pathnames.slice(0, idx + 1).join('/')}`;
            const isLast = idx === pathnames.length - 1;

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                <ConditionalLink
                  to={to}
                  text={decodeURIComponent(value)}
                  condition={!isLast}
                />
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
