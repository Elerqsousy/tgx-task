import { Link } from 'react-router-dom';

type CharacterCardProps = {
  id: number;
  name: string;
  image: string;
};

export const CharacterCard = ({ id, name, image }: CharacterCardProps) => {
  return (
    <Link
      to={`${id}`}
      className="rounded-xl shadow-md hover:scale-105 transition block bg-white"
    >
      <img
        src={image}
        alt={name}
        className="rounded-t-xl w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
      />
      <div
        className="
          p-2 sm:p-3 md:p-4
          text-center font-semibold
          text-sm sm:text-base md:text-lg lg:text-xl
        "
      >
        {name}
      </div>
    </Link>
  );
};
