// pages/AnimeDetail.jsx
import { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AnimeContext } from '../context/AnimeContext';

export default function AnimeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { findAnimeById, deleteAnime } = useContext(AnimeContext);

  const anime = findAnimeById(id);

  if (!anime) return <div>Anime not found</div>;

  const handleDelete = () => {
    deleteAnime(id);
    alert('Anime deleted (simulated)');
    navigate('/anime');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{anime.title}</h1>
      {anime.images?.jpg?.image_url && (
        <img src={anime.images.jpg.image_url} alt={anime.title} className="mb-4 w-64 rounded" />
      )}
      <p className="mb-4">{anime.synopsis}</p>
      <p><strong>Episodes:</strong> {anime.episodes}</p>
      <p><strong>Status:</strong> {anime.status}</p>
      <p><strong>Score:</strong> {anime.score}</p>
      <p><strong>Type:</strong> {anime.type}</p>

      <div className="mt-4 space-x-4">
        <Link to="/anime" className="text-blue-500">Back to List</Link>
        <Link to={`/anime/edit/${anime.mal_id}`} className="text-green-600">Edit</Link>
        <button onClick={handleDelete} className="text-red-600 ml-4">Delete</button>
      </div>
    </div>
  );
}