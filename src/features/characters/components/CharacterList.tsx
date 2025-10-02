import { FC, useState } from 'react';

import { CharacterCard } from './CharacterCard';
import { useCharacters } from '../hooks/useCharacters';
import Pagination from '@/components/ui/Pagination';

export const CharacterList: FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useCharacters(page);

  const onPrevious = () => {
    setPage((prev) => prev - 1);
  };

  const onNext = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading characters</div>
    );

  return (
    <div className="flex flex-col gap-6">
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
      <Pagination
        page={page}
        onNext={onNext}
        onPrevious={onPrevious}
        nextDisabled={!data.info.next}
      />
    </div>
  );
};
