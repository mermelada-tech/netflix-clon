import { render, screen } from '@testing-library/react';
import MobileMenu from '../MobileMenu';
import { vi } from 'vitest';

describe('MobileMenu component', () => {
  it('should not render the menu when visible prop is false', () => {
    render(<MobileMenu visible={false} />);

    const menu = screen.queryByText('Home');
    expect(menu === null);
  });

  it('should render the menu when visible prop is true', () => {
    render(<MobileMenu visible={true} />);

    const homeItem = screen.getByText('Home');
    const seriesItem = screen.getByText('Series');
    const filmsItem = screen.getByText('Films');

    expect(homeItem).toBeInTheDocument();
    expect(seriesItem).toBeInTheDocument();
    expect(filmsItem).toBeInTheDocument();
  });

  it('should render all the menu items', () => {
    render(<MobileMenu visible={true} />);

    const menuItems = [
      'Home',
      'Series',
      'Films',
      'New & Popular',
      'My List',
      'Browse by Languages',
    ];

    menuItems.forEach(item => {
      const menuItem = screen.getByText(item);
      expect(menuItem).toBeInTheDocument();
    });
  });
});
