import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input component', () => {
  it('should be in the document', () => {
    render(
      <Input
        type="text"
        id="description"
        name="description"
        defaultValue="Loren ipsum"
      />,
    );

    const inputElement = screen.getByDisplayValue('Loren ipsum');

    expect(inputElement).toBeInTheDocument();
  });

  it('should contain the placeholder "Write a description"', () => {
    render(
      <Input
        type="text"
        id="description"
        name="description"
        placeholder="Write a description"
      />,
    );

    const inputElement = screen.getByPlaceholderText('Write a description');
    expect(inputElement).toBeTruthy();
  });

  it('must check component attributes "id" and "name"', () => {
    render(
      <Input
        type="text"
        id="description"
        name="description"
        placeholder="Write a description"
      />,
    );

    const inputElement = screen.getByPlaceholderText('Write a description');

    expect(inputElement).toHaveAttribute('id', 'description');
    expect(inputElement).toHaveAttribute('name', 'description');
  });
});
