import ReactMarkdown from 'react-markdown';
import {
  MdOutlineVisibility as ShowIcon,
  MdOutlineVisibilityOff as HideIcon
} from 'react-icons/md';
import './Preview.css';

interface Props {
  content: string;
  toggleView: () => void;
  isPreviewOpen: boolean;
};
const Preview = ({ content, toggleView, isPreviewOpen }: Props) => {
  const Icon = isPreviewOpen ? HideIcon : ShowIcon;
  return (
    <section className='preview'>
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