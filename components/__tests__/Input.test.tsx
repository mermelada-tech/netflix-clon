import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';
import { vi } from 'vitest';

describe('Input component', () => {
  const id = 'test-input';
  const label = 'Test Label';
  const type = 'text';

  it('should render input with correct attributes', () => {
    render(
      <Input id={id} onChange={() => {}} value="" label={label} type={type} />,
    );

    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', id);
    expect(inputElement).toHaveAttribute('type', type);
    expect(inputElement).toHaveAttribute('placeholder', ' ');
  });

  it('should call onChange handler when value changes', async () => {
    const onChange = vi.fn();
    render(
      <Input id={id} onChange={onChange} value="" label={label} type={type} />,
    );

    const inputElement = screen.getByLabelText(label);
    await userEvent.type(inputElement, 'new value');

    expect(onChange).toHaveBeenCalled();
  });

  it('should display label for the input', () => {
    render(
      <Input id={id} onChange={() => {}} value="" label={label} type={type} />,
    );

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', id);
  });

  it('should render with correct value', () => {
    const value = 'Test Value';
    render(
      <Input
        id={id}
        onChange={() => {}}
        value={value}
        label={label}
        type={type}
      />,
    );

    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toHaveValue(value);
  });
});
