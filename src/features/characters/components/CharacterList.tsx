import { useState } from 'react';

import { CharacterCard } from './CharacterCard';
import { useCharacters } from '../hooks/useCharacters';

export const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useCharacters(page);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading characters</div>
    );

  return (
    <div className="flex flex-col gap-6">
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data.results.map((char: any) => (
          <CharacterCard
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
          />
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center gap-4 mt-4 sm:mt-6 md:mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-3 sm:px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 text-sm sm:text-base"
        >
          Prev
        </button>
        <span className="text-sm sm:text-base md:text-lg font-medium">
          Page {page}
        </span>
        <button
          disabled={!data.info.next}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 sm:px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50 text-sm sm:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
};
