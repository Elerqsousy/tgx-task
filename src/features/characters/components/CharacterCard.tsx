import { FC } from 'react';

import { Link } from 'react-router-dom';

import { Character } from '@/api/rickAndMortyTypes';

type CharacterCardProps = {
  id: number;
  character: Character;
};

export const CharacterCard: FC<CharacterCardProps> = ({ id, character }) => {
  return (
    <Link
      to={`${id}`}
      state={{ character }}
      className="rounded-xl shadow-md hover:scale-105 transition block bg-white"
    >
      <img
        src={character.image}
        alt={character.name}
        className="rounded-t-xl w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
      />
      <div
        className="
          p-2 sm:p-3 md:p-4
          text-center font-semibold
          text-sm sm:text-base md:text-lg lg:text-xl
        "
      >
        {character.name}
      </div>
    </Link>
  );
};
