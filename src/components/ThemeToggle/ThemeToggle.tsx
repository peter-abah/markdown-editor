import clsx from 'clsx';
import { useAppContext } from '@/contexts/AppContext';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const {theme, toggleTheme} = useAppContext();
  const toggleClass = clsx('theme-toggle', theme);

  return (
    <div className='theme-toggle-wrapper'>
      <p>Theme: </p>

      <MdLightMode
        className={clsx('theme-icon-light', theme)}
      />
 
      <button
        onClick={toggleTheme}
        className={toggleClass}
      >
        <span className='sr-only'>Toggle Theme</span>
      </button>

      <MdDarkMode 
        className={clsx('theme-icon-dark', theme)} 
      />
    </div>
  );
};

export default ThemeToggle;