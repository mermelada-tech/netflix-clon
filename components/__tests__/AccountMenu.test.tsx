import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import AccountMenu from '../AccountMenu';

describe('AccountMenu component', () => {
  it('should render correctly when visible prop is true', () => {
    render(<AccountMenu visible={true} />);

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByText('Sign out of Netflix')).toBeInTheDocument();
  });

  it('should not render anything when visible prop is false', () => {
    const { container } = render(<AccountMenu visible={false} />);

    expect(container.firstChild).toBeNull();
  });

  it('should have the correct image src attribute', () => {
    render(<AccountMenu visible={true} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/images/default-blue.png');
  });

  it('should call signOut function when clicking sign out', async () => {
    const { signOut } = vi.hoisted(() => {
      return { signOut: vi.fn() };
    });

    vi.mock('next-auth/react', () => {
      return { signOut };
    });

    render(<AccountMenu visible={true} />);
    await userEvent.click(screen.getByText('Sign out of Netflix'));

    expect(signOut).toHaveBeenCalled();
  });
});
