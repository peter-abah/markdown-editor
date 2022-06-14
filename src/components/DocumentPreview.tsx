import ReactMarkdown from 'react-markdown';

interface Props {
  content: string;
};
const DocumentPreview = ({ content }: Props) => {
  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  );
};

export default DocumentPreview;