type CharacterDetailsProps = {
  character: any;
};

export const CharacterDetails = ({ character }: CharacterDetailsProps) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow rounded-lg p-4">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-lg w-full h-64 object-cover"
      />
      <h2 className="text-2xl font-bold mt-4">{character.name}</h2>
      <ul className="mt-2 space-y-1">
        <li>
          <strong>Status:</strong> {character.status}
        </li>
        <li>
          <strong>Species:</strong> {character.species}
        </li>
        <li>
          <strong>Gender:</strong> {character.gender}
        </li>
        <li>
          <strong>Origin:</strong> {character.origin?.name}
        </li>
        <li>
          <strong>Last location:</strong> {character.location?.name}
        </li>
        <li>
          <strong>Episodes:</strong> {character.episode.length}
        </li>
      </ul>
    </div>
  );
};
