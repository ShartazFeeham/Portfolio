import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import './index.css';

const issueDateLabel = new Date().toLocaleDateString('en-GB', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
}).toUpperCase();

export default function App() {
  return (
    <Routes>
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:slug" element={<BlogPost />} />
      <Route path="*" element={<HomePage issueDateLabel={issueDateLabel} />} />
    </Routes>
  );
}
