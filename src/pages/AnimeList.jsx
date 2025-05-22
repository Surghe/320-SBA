import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AnimeList() {
  // State to store anime list
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch anime on component mount
  useEffect(() => {
    console.log('Fetching anime list...');
    
    axios.get('https://api.jikan.moe/v4/anime')
      .then(response => {
        console.log('Anime data fetched:', response.data.data);
        setAnimeList(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching anime:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading anime list...</div>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Anime List</h1>
      <Link to="/anime/new" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Add New Anime</Link>
      <ul className="grid grid-cols-1 gap-4">
        {animeList.map(anime => (
          <li key={anime.mal_id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{anime.title}</h2>
            <p>{anime.synopsis?.slice(0, 100)}...</p>
            <Link to={`/anime/${anime.mal_id}`} className="text-blue-600 mt-2 block">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}