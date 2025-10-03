import { useLocation, useParams } from 'react-router-dom';

import { useCharacter } from '@/features/characters/hooks/useCharacters';

import { Character as CharacterType } from '@/api/rickAndMortyTypes';
import { CharacterDetails } from '@/features/characters/components/CharacterDetails';

const Character = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  // Primary: Activated while navigating from the home page
  const character: CharacterType | undefined = location.state?.character;

  // Activated only on manually entering a URL
  const { data, isLoading, isError } = useCharacter(id!, {
    enabled: !character,
  });

  if (!character && isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!character && isError) {
    return (
      <div className="text-center text-red-500">Error loading character</div>
    );
  }

  return (
    <div className="p-6">
      <CharacterDetails character={(character || data)!} />
    </div>
  );
};

export default Character;
