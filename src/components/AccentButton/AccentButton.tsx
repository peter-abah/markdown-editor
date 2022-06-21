import React from 'react';
import clsx from 'clsx';
import './AccentButton.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  
};

// Button with some styling
const AccentButton = (props: Props) => {
  let className = clsx(props.className, 'accent-btn');

  return (
    <button {...props} className={className}/>
   )
};

export default AccentButton;