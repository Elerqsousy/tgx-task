import { useParams } from 'react-router-dom';

const Character = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Character Details</h2>
      <p>Showing details for ID: {id}</p>
    </div>
  );
};

export default Character;
