import { render, screen } from '@testing-library/react';
import NavbarItem from '../NavbarItem';

describe('NavbarItem component', () => {
  it('should render the label text', () => {
    const label = 'Test Label';
    render(<NavbarItem label={label} />);

    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it('should have correct styling', () => {
    const label = 'Test Label';
    render(<NavbarItem label={label} />);

    const labelElement = screen.getByText(label);
    expect(labelElement).toHaveClass(
      'text-white cursor-pointer hover:text-gray-300 transition',
    );
  });
});
