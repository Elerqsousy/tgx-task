import { useParams } from 'react-router-dom';

import { useCharacter } from '@/features/characters/hooks/useCharacters';

import { CharacterDetails } from '@/features/characters/components/CharacterDetails';

const Character = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useCharacter(id!);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading character</div>
    );

  return (
    <div className="p-6">
      <CharacterDetails character={data} />
    </div>
  );
};

export default Character;
