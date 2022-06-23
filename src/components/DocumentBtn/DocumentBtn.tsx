import React from 'react';
import clsx from 'clsx';
import { Document } from '@/types';
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
        <span className="doc-btn__date">{formattedDate}</span>
        <span className="doc-btn__name">{doc.name}</span>
      </button>
    </li>
  )
};

export default DocumentBtn;