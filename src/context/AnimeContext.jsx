import { createContext, useState, useEffect } from 'react';
import { fetchAnimeList } from '../api';

export const AnimeContext = createContext();

const LOCAL_STORAGE_KEY = 'userAnime';

export const AnimeProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);
  const [userAnime, setUserAnime] = useState([]);

  // Load from API
  useEffect(() => {
    fetchAnimeList()
      .then(res => {
        setAnimeList(res.data.data);
      })
      .catch(err => {
        console.error('Error fetching anime:', err);
      });
  }, []);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setUserAnime(JSON.parse(stored));
      console.log('Loaded user anime from localStorage');
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userAnime));
    console.log('Saved user anime to localStorage');
  }, [userAnime]);

  const getAllAnime = () => [...userAnime, ...animeList];

  const createAnime = (anime) => {
    const newAnime = {
      ...anime,
      mal_id: Date.now(), // fake unique ID
    };
    setUserAnime(prev => [newAnime, ...prev]);
  };

  const updateAnime = (id, updatedAnime) => {
    setUserAnime(prev =>
      prev.map(a => (a.mal_id === parseInt(id) ? { ...a, ...updatedAnime } : a))
    );
  };

  const deleteAnime = (id) => {
    setUserAnime(prev => prev.filter(a => a.mal_id !== parseInt(id)));
  };

  const findAnimeById = (id) => {
    const all = getAllAnime();
    return all.find(a => a.mal_id === parseInt(id));
  };

  return (
    <AnimeContext.Provider value={{
      getAllAnime,
      createAnime,
      updateAnime,
      deleteAnime,
      findAnimeById
    }}>
      {children}
    </AnimeContext.Provider>
  );
};