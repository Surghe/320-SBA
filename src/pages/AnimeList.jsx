// pages/AnimeList.jsx
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimeContext } from '../context/AnimeContext';

export default function AnimeList() {
  const { getAllAnime } = useContext(AnimeContext);
  const [animeList, setAnimeList] = useState([]);

  // Load from context
  useEffect(() => {
    console.log('Loading anime from context...');
    setAnimeList(getAllAnime());
  }, [getAllAnime]);

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