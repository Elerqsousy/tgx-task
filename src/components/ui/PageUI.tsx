import { FC } from 'react';

const PageUI: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div className="mx-[8%] px-[2%] pt-[5%] pb-[2%] flex-1 overflow-y-auto">
      {children}
    </div>
  );
};

export default PageUI;
