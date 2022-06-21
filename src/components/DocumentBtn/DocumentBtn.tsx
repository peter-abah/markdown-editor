import React from 'react';
import { Document } from '@/types';
import { format } from 'date-fns';
import './DocumentBtn.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  doc: Document;
  onClick: () => void;
};
const DocumentBtn = ({doc, ...btnProps}: Props) => {
  return (
    <li className="doc-btn">
      <button {...btnProps}>
        <span className="doc-btn__date">{format(doc.updated_at, 'MMMM d, yyyy')}</span>
        <span className="doc-btn__name">{doc.name}</span>
      </button>
    </li>
  )
};

export default DocumentBtn;