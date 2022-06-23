import clsx from 'clsx';
import { useAppContext } from '@/contexts/AppContext';

import Documents from '../Documents';
import ThemeToggle from '../ThemeToggle';
import './Menu.css';

const Menu = () => {
  const { isMenuOpen } = useAppContext();

  const className = clsx('menu', isMenuOpen && 'menu--open');
  return (
    <aside className={className}>
      <h1 className='menu-title'>MARKDOWN</h1>
      <Documents />
      <ThemeToggle />
    </aside>
  )
};

export default Menu;