import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/ProgressBar.css';

function ProgressBar() {
  const { completedLessons } = useContext(AppContext);
  const totalLessons = 3;
  const percentage = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="progress-container">
      <div className="progress-label">
        Progress: {completedLessons.length}/{totalLessons}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
