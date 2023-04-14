import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserCardsCollections from './pages/UserCardsCollections';
import UserCard from './components/userCard/userCard';
import './App.css';
import './components/userCard/UserCard.css';
import { Layout } from './components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<UserCardsCollections />} />
        <Route path="tweets/:userId" element={<UserCard />} />
      </Route>
    </Routes>
  );
};
