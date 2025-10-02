import { CharacterList } from '@/features/characters/components/CharacterList';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Rick & Morty Characters
      </h1>
      <CharacterList />
    </div>
  );
};

export default Home;
