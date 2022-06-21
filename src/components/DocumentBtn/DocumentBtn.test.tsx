import React from 'react';
import userEvent from '@testing-library/user-event';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

import DocumentBtn from '.';

const doc = {
  id: 'first',
  name: 'render',
  content: '',
  created_at: new Date(),
  updated_at: new Date(),
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
  // Using epoch date as date (Jan 1 1970) for updated at since
  // That is what should be displayed
  const docWithEpochDate = {
    ...doc,
    created_t: new Date(),
    updated_at: new Date(0),
  };
  
  const formattedDate = "January 1, 1970"
  
  const { getByRole } = render(
    <DocumentBtn
      doc={docWithEpochDate}
      onClick={() => null}
    />
  );
  
  const btn = getByRole('button');
  expect(btn).toHaveTextContent(docWithEpochDate.name);
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