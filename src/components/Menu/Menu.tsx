import clsx from 'clsx';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useAppContext } from '@/contexts/AppContext';

import Documents from '../Documents';
import ThemeToggle from '../ThemeToggle';
import './Menu.css';

const Menu = () => {
  const ref = useRef<HTMLBaseElement | null>(null);
  const { isMenuOpen, setMenu } = useAppContext();
  
  useOnClickOutside(ref, () => setMenu(false));
  const className = clsx('menu', isMenuOpen && 'menu--open');
  return (
    <aside ref={ref} className={className}>
      <h1 className='menu-title'>MARKDOWN</h1>
      <Documents />
      <ThemeToggle />
    </aside>
  )
};

export default Menu;