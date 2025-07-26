import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Completion.css';

function Completion() {
  const { coins } = useContext(AppContext);
  const navigate = useNavigate();
  const [animatedCoins, setAnimatedCoins] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCoins(prev => {
        if (prev >= coins) {
          clearInterval(interval);
          return coins;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [coins]);

  return (
    <div className="completion">
      <h2>🎉 Congratulations!</h2>
      <p>You’ve completed the “Understanding Home Inspections” module.</p>
      <div className="coin-animation">💰 {animatedCoins} coins earned!</div>
      <button className="home-btn" onClick={() => navigate('/')}>Back to Overview</button>
    </div>
  );
}

export default Completion;
