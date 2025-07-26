import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/Overview.css';

function Overview() {
  const navigate = useNavigate();
  const { completedLessons } = useContext(AppContext);

  return (
    <div className="overview">
      <h2>Understanding Home Inspections</h2>
      <p>{completedLessons.length}/3 Lessons Completed</p>
      <p>Reward: 💰 30 Coins</p>
      <button onClick={() => navigate('/lesson/1')} className="start-btn">
        Start Module
      </button>
    </div>
  );
}

export default Overview;
