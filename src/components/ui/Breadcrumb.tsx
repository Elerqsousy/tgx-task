import { FC } from 'react';

import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, To, useLocation, useNavigate } from 'react-router-dom';

import { cn } from '@/utils/tw-clsx';

const CondetionalLink: FC<{
  condetion: boolean;
  text: string;
  to: To;
}> = ({ condetion, to, text }) => {
  return (
    <>
      {condetion ? (
        <Link to={to} className="capitalize hover:text-blue-600">
          {decodeURIComponent(text)}
        </Link>
      ) : (
        <span className="capitalize font-medium text-gray-900">
          {decodeURIComponent(text)}
        </span>
      )}
    </>
  );
};

const Breadcrumb: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // strip the basename automatically
  const path = location.pathname;
  const pathnames = path.split('/').filter(Boolean);

  // Build parent path without the basePath
  const parentPath =
    pathnames.length > 0 ? `/${pathnames.slice(0, -1).join('/')}` : null;

  return (
    <div className="flex items-center space-x-4 p-4">
      <button
        onClick={() => navigate(parentPath || '/')}
        className={cn(
          'flex items-center text-sm rounded-md px-3 py-1',
          parentPath
            ? 'text-gray-600 hover:text-blue-600 border border-gray-600'
            : 'text-gray-400 cursor-not-allowed border border-gray-200'
        )}
        disabled={!parentPath}
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </button>

      <nav aria-label="breadcrumb">
        <ol className="flex items-center text-sm text-gray-600">
          <li>
            <CondetionalLink
              to="/"
              text="Home"
              condetion={!!pathnames.length}
            />
          </li>

          {pathnames.map((value, idx) => {
            const to = `/${pathnames.slice(0, idx + 1).join('/')}`;
            const isLast = idx === pathnames.length - 1;

            return (
              <li key={to} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                <CondetionalLink
                  to={to}
                  text={decodeURIComponent(value)}
                  condetion={!isLast}
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
