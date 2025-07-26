import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Overview from './pages/Overview.jsx';
import Lesson from './pages/Lesson.jsx';
import Completion from './pages/Completion.jsx';

function App() {
  return (
    <Router>
      <Header />
      <ProgressBar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/lesson/:id" element={<Lesson />} />
        <Route path="/complete" element={<Completion />} />
      </Routes>
    </Router>
  );
}

export default App;
