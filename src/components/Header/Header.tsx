import { ChangeEvent } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import {
   FaRegSave as SaveIcon,
   FaTrashAlt as DeleteIcon,
   FaTimes as CloseIcon,
   FaBars as OpenIcon,
} from 'react-icons/fa';
import { MdOutlineDescription as FileIcon } from 'react-icons/md';

import AccentBtn from '../AccentButton';
import { Document } from '@/types';
import './Header.css';

interface Props {
  handleSave: () => void;
  handleDelete: () => void;
  updateName: (e: ChangeEvent<HTMLInputElement>) => void;
  doc: Document | null;
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
        <h1 className='header-title'>MARKDOWN</h1>
        {doc &&
          <div className='flex items-center'>
   
            <FileIcon className='file-icon mr-2' />
            <div className='flex flex-col'>
              <label className='doc-title-label' htmlFor='name-input'>Document Name</label>
              <input id='name-input' value={doc.name} onChange={updateName} />
            </div>
          </div>
        }
 
        <div className="header__btns">
          <button className='header-btn' onClick={handleDelete}>
            <DeleteIcon className='text-xl' />
          </button>
    
          <AccentBtn
            className='flex items-center gap-2'
            onClick={handleSave}
          >
            <SaveIcon className='text-xl' />
            <span className='hidden md:block'>Save Changes</span>
          </AccentBtn>
        </div>
      </div>
    </header>
  )
};

export default Header;