import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar';

const TOP_OFFSET = 66;

describe('Navbar component', () => {
  it('should render logo', () => {
    render(<Navbar />);

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render all NavbarItem labels on large screens', () => {
    render(<Navbar />);

    const labels = [
      'Home',
      'Series',
      'Films',
      'New & Popular',
      'My List',
      'Browse by Languages',
    ];
    labels.forEach(label => {
      const item = screen.getByText(label);
      expect(item).toBeInTheDocument();
    });
  });

  it('should not render MobileMenu when not clicked', () => {
    render(<Navbar />);

    const mobileMenu = screen.queryByTestId('mobile-menu');
    expect(mobileMenu).toBeNull();
  });

  it('should render MobileMenu when Browse is clicked', async () => {
    render(<Navbar />);

    const browseButton = screen.getByText('Browse');
    await userEvent.click(browseButton);
    const mobileMenu = screen.queryByTestId('mobile-menu');
    expect(mobileMenu).toBeInTheDocument();
  });

  it('should not render AccountMenu when not clicked', () => {
    render(<Navbar />);

    const accountMenu = screen.queryByTestId('account-menu');
    expect(accountMenu).toBeNull();
  });

  it('should render AccountMenu when account image is clicked', async () => {
    render(<Navbar />);

    const accountImage = screen.getByAltText('avatar');
    await userEvent.click(accountImage);

    const accountMenu = screen.queryByTestId('account-menu');
    expect(accountMenu).toBeInTheDocument();
  });

  it('should show background when scrolled past TOP_OFFSET', () => {
    render(<Navbar />);

    window.scrollY = TOP_OFFSET + 1;
    fireEvent(window, new Event('scroll'));

    const navbar = screen.getByRole('navigation');
    expect(navbar.firstChild).toHaveClass('bg-zinc-900 bg-opacity-90');
  });
});
