import { createContext, useState, useEffect } from 'react';
import { fetchAnimeList } from '../api';

export const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);
  const [userAnime, setUserAnime] = useState([]); // Locally created anime

  useEffect(() => {
    fetchAnimeList()
      .then(res => {
        setAnimeList(res.data.data);
      })
      .catch(err => {
        console.error('Error fetching initial anime:', err);
      });
  }, []);

  // Combine API anime + user-created anime
  const getAllAnime = () => [...userAnime, ...animeList];

  // Simulate Create
  const createAnime = (anime) => {
    const newAnime = {
      ...anime,
      mal_id: Date.now(), // Fake unique ID
    };
    setUserAnime(prev => [newAnime, ...prev]);
  };

  // Simulate Update
  const updateAnime = (id, updatedAnime) => {
    setUserAnime(prev =>
      prev.map(a => (a.mal_id === parseInt(id) ? { ...a, ...updatedAnime } : a))
    );
  };

  // Simulate Delete
  const deleteAnime = (id) => {
    setUserAnime(prev => prev.filter(a => a.mal_id !== parseInt(id)));
  };

  return (
    <AnimeContext.Provider value={{
      getAllAnime,
      createAnime,
      updateAnime,
      deleteAnime,
      findAnimeById: (id) => {
        const all = getAllAnime();
        return all.find(a => a.mal_id === parseInt(id));
      }
    }}>
      {children}
    </AnimeContext.Provider>
  );
};