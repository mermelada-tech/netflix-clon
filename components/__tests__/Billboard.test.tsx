const mockData = {
  title: 'The Falcon and the Winter Soldier',
  thumbnailUrl: 'https://i.ytimg.com/vi/0jNvJU52LvU/maxresdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=0jNvJU52LvU',
  description:
    'Following the events of “Avengers: Endgame,” Sam Wilson/Falcon (Anthony Mackie) and Bucky Barnes/Winter Soldier (Sebastian Stan) team up in a global adventure that tests their abilities—and their patience—in Marvel Studios’ “The Falcon and The Winter Soldier.” The all-new series is directed by Kari Skogland; Malcolm Spellman is the head writer. Streaming exclusively on Disney+.',
};

vi.mock('@/hooks/useBillboard', async () => ({
  default: () => ({ data: mockData }),
}));

import { render, screen } from '@testing-library/react';

import Billboard from '../Billboard';
import { vi } from 'vitest';

describe('Billboard component', () => {
  it('should render video with correct attributes', () => {
    render(<Billboard />);

    const video = screen.getByTestId('video');
    expect(video).toHaveAttribute('poster', mockData.thumbnailUrl);
    expect(video).toHaveAttribute('src', mockData.videoUrl);
    expect(video).toHaveAttribute('autoPlay', '');
    expect(video).toHaveAttribute('loop', '');
  });

  it('should render title and description', () => {
    render(<Billboard />);

    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });

  it('should render More Info button with icon', () => {
    render(<Billboard />);

    const button = screen.getByText('More Info').closest('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition',
    );

    // Comprobar la existencia del icono
    expect(button?.querySelector('svg')).toBeInTheDocument();
  });
});
