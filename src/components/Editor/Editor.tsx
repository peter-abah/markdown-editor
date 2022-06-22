import React from 'react';
import { MdOutlineVisibility as ShowIcon } from 'react-icons/md';

import './Editor.css'
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>  {
  toggleView: () => void;
};
const Editor = ({toggleView, ...restProps}: Props) => {
  return (
    <section className='editor'>
      <header className='markdown-header'>
        <h1>MARKDOWN</h1>
        <button onClick={toggleView}>
          <ShowIcon className='text-2xl' />
        </button>
      </header>
      <textarea
        {...restProps}
        className='markdown-textare' />
    </section>
  )
};

export default Editor;