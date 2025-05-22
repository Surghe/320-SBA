// pages/AnimeDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchAnimeList } from '../api';
import axios from 'axios';

export default function AnimeDetail() {
  // Get anime ID from the URL
  const { id } = useParams();

  // State to hold anime details
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the anime details when component mounts or ID changes
  useEffect(() => {
    console.log(`Fetching details for anime ID: ${id}`);

    fetchAnimeList()
      .then(response => {
        console.log('Anime detail data:', response.data.data);
        setAnime(response.data.data);
        setLoading(true);
      })
      .catch(error => {
        console.error('Error fetching anime details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading anime details...</div>;
  if (!anime) return <div>Anime not found</div>;

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

      /* Navigation Links */
      <div className="mt-4">
        <Link to="/anime" className="text-blue-500 mr-4">Back to List</Link>
        <Link to={`/anime/edit/${anime.mal_id}`} className="text-green-600">Edit</Link>
      </div>
    </div>
  );
}