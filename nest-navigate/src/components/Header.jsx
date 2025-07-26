import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Header() {
  const { coins } = useContext(AppContext);

  return (
    <header className="header">
      <h1 className="logo">Nest Navigate</h1>
      <div className="coin-counter">💰 {coins}</div>
    </header>
  );
}

export default Header;
