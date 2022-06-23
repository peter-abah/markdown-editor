import React from 'react';
import userEvent from '@testing-library/user-event';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

import DocumentBtn from './DocumentBtn';

const doc = {
  id: 'first',
  name: 'render',
  content: '',
  created_at: '1970-01-01',
  updated_at: '1970-01-01',
};

test('it renders correctly', () => {
  const {container} = render(
    <DocumentBtn
      doc={doc}
      onClick={() => null}
    />
  );
  expect(container).toMatchSnapshot();
});

test('it renders with document name and date', () => {
  const formattedDate = "January 1, 1970"
  
  const { getByRole } = render(
    <DocumentBtn
      doc={doc}
      onClick={() => null}
    />
  );
  
  const btn = getByRole('button');
  expect(btn).toHaveTextContent(doc.name);
  expect(btn).toHaveTextContent(formattedDate);
});

test("it responds to click events", async () => {
  const mockFn = jest.fn();
  
  const { getByRole } = render(
    <DocumentBtn
      doc={doc}
      onClick={mockFn}
    />
  );
  
  const btn = getByRole('button');
  await userEvent.click(btn);
  
  expect(mockFn).toHaveBeenCalled();
});