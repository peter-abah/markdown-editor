import ReactMarkdown from 'react-markdown';

interface Props {
  content: string;
};
const Preview = ({ content }: Props) => {
  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  );
};

export default Preview;