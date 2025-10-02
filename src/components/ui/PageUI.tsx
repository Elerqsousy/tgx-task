import { FC } from 'react';

const PageUI: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="px-[2%] py-[2vw] flex-1 overflow-y-auto">{children}</div>
  );
};

export default PageUI;
