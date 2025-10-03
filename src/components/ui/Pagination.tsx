import { FC } from 'react';

import Button from './Button';

type PaginationProps = {
  page: number;
  onPrevious: () => void;
  onNext: () => void;
  nextDisabled: boolean;
};

const Pagination: FC<PaginationProps> = ({
  page,
  onPrevious,
  onNext,
  nextDisabled,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-4 sm:mt-6 md:mt-8">
      <Button disabled={page === 1} onClick={onPrevious} text="Prev" />
      <span className="text-sm sm:text-base md:text-lg font-medium px-10">
        {page}
      </span>
      <Button text="Next" disabled={nextDisabled} onClick={onNext} />
    </div>
  );
};

export default Pagination;
