import Documents from '../Documents';
import './Menu.css';

const Menu = () => {
  return (
    <aside className='menu'>
      <h1 className='menu-title'>MARKDOWN</h1>
      <Documents />
    </aside>
  )
};

export default Menu;