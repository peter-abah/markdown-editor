import React from 'react';
import clsx from 'clsx';
import { Document } from '@/types';
import { MdOutlineDescription as FileIcon } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import './DocumentBtn.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  doc: Document;
  onClick: () => void;
  isActive?: boolean;
};
const DocumentBtn = ({doc, isActive, ...btnProps}: Props) => {
  const formattedDate = format(parseISO(doc.updated_at), 'MMMM d, yyyy');
  return (
    <li >
      <button
        className={clsx("doc-btn", isActive && 'active')}
        {...btnProps}
      >
        <FileIcon className='file-icon mr-2' />
        <div className='flex flex-col items-start'>
          <span className="doc-btn__date">{formattedDate}</span>
          <span className="doc-btn__name">{doc.name}</span>
        </div>
      </button>
    </li>
  )
};

export default DocumentBtn;