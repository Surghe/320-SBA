import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimeContext } from '../context/AnimeContext';

export default function AnimeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const { createAnime, updateAnime, findAnimeById } = useContext(AnimeContext);

  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [episodes, setEpisodes] = useState('');
  const [score, setScore] = useState('');

  useEffect(() => {
    if (isEdit) {
      const anime = findAnimeById(id);
      if (anime) {
        console.log('Editing anime:', anime);
        setTitle(anime.title || '');
        setSynopsis(anime.synopsis || '');
        setEpisodes(anime.episodes || '');
        setScore(anime.score || '');
      }
    }
  }, [id, isEdit, findAnimeById]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const animeData = { title, synopsis, episodes, score };

    if (isEdit) {
      updateAnime(id, animeData);
      alert('Anime updated (simulated)');
    } else {
      createAnime(animeData);
      alert('Anime created (simulated)');
    }

    navigate('/anime');
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{isEdit ? 'Edit Anime' : 'Create New Anime'}</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Synopsis</label>
          <textarea
            className="w-full border rounded p-2"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
            rows={4}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Episodes</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={episodes}
            onChange={(e) => setEpisodes(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Score</label>
          <input
            type="number"
            step="0.1"
            className="w-full border rounded p-2"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {isEdit ? 'Update Anime' : 'Create Anime'}
        </button>
      </form>
    </div>
  );
}