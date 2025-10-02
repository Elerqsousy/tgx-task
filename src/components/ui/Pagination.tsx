import { FC } from 'react';

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
      <button
        disabled={page === 1}
        onClick={onPrevious}
        className="px-3 sm:px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 text-sm sm:text-base"
      >
        Prev
      </button>
      <span className="text-sm sm:text-base md:text-lg font-medium px-10">
        {page}
      </span>
      <button
        disabled={nextDisabled}
        onClick={onNext}
        className="px-3 sm:px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 text-sm sm:text-base"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
