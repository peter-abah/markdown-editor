import { ChangeEvent } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import {
   FaRegSave as SaveIcon,
   FaTrashAlt as DeleteIcon,
   FaTimes as CloseIcon,
   FaBars as OpenIcon,
   FaFile as FileIcon
} from 'react-icons/fa';

import AccentBtn from '../AccentButton';
import { Document } from '@/types';
import './Header.css';

interface Props {
  handleSave: () => void;
  handleDelete: () => void;
  updateName: (e: ChangeEvent<HTMLInputElement>) => void;
  doc: Document;
}

const Header = (props: Props) => {
  const { isMenuOpen, toggleMenu } = useAppContext();
  const { doc, handleSave, handleDelete, updateName } = props;
  
  const MenuIcon = isMenuOpen ? CloseIcon : OpenIcon;
  return (
    <header className="header">
      <button
        className="menu-btn"
        onClick={toggleMenu}
      >
        <MenuIcon className="text-2xl" />
      </button>
      <div className='header__container'>
        <input value={doc.name} onChange={updateName} />
        <button onClick={handleDelete}>
          <DeleteIcon className='text-xl' />
        </button>
 
        <AccentBtn onClick={handleSave}>
          <SaveIcon className='text-xl' />
        </AccentBtn>
      </div>
    </header>
  )
};

export default Header;