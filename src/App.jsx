import './App.css'
import { BrowserRouter } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AnimeList from './pages/AnimeList';
import AnimeDetail from './pages/AnimeDetail';
import AnimeForm from './pages/AnimeForm';

function App () {
  return (
    <BrowserRouter>
      <div className="p-4">
        /* Navigation Links */
        <nav className="mb-4">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/anime">Anime List</Link>
        </nav>

        /* Application Routes */
        <Routes>
          /* Home Page */
          <Route path="/home" element={<HomePage />} />

          /* List of Anime */
          <Route path="/anime" element={<AnimeList />} />

          /* Anime Detail Page */
          <Route path="/anime/:id" element={<AnimeDetail />} />

          /* Form for Editing Anime */
          <Route path="/anime/edit/:id" element={<AnimeForm />} />

          /* Form for Creating New Anime */
          <Route path="/anime/new" element={<AnimeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Console log to ensure App is loading
console.log("App component loaded");


export default App;
