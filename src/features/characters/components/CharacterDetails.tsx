import { FC } from 'react';

import { Character } from '@/api/rickAndMortyTypes';

type CharacterDetailsProps = {
  character: Character;
};

type item = { title: string; details: string | number };

const Details: FC<{ list: item[] }> = ({ list }) => (
  <ul className="mt-2 space-y-1">
    {list.map(({ title, details }) => (
      <li key={title}>
        <strong>{title}:</strong> {details}
      </li>
    ))}
  </ul>
);

export const CharacterDetails: FC<CharacterDetailsProps> = ({ character }) => {
  const detailsList: item[] = [
    { title: 'Status', details: character.status },
    { title: 'Species', details: character.species },
    { title: 'Gender', details: character.gender },
    { title: 'Origin', details: character.origin?.name },
    { title: 'Last location', details: character.location?.name },
    { title: 'Episodes', details: character.episode.length },
  ];

  return (
    <div className="max-w-lg mx-auto bg-white shadow rounded-lg p-4">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-lg w-full h-64 object-cover"
      />
      <h2 className="text-2xl font-bold mt-4">{character.name}</h2>
      <Details list={detailsList} />
    </div>
  );
};
