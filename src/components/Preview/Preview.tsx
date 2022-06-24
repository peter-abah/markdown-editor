import ReactMarkdown from 'react-markdown';
import {
  MdOutlineVisibility as ShowIcon,
  MdOutlineVisibilityOff as HideIcon
} from 'react-icons/md';
import clsx from 'clsx';
import './Preview.css';

interface Props {
  content: string;
  toggleView: () => void;
  showView: boolean;
};
const Preview = ({ content, toggleView, showView }: Props) => {
  const Icon = showView ? HideIcon : ShowIcon;
  return (
    <section className={clsx('preview', showView && 'show')}>
      <header className='markdown-header'>
        <h2>PREVIEW</h2>
        <button onClick={toggleView}>
          <Icon className='text-2xl' />
        </button>
      </header>
  
      <ReactMarkdown className='markdown'>{content}</ReactMarkdown>
    </section>
  );
};

export default Preview;