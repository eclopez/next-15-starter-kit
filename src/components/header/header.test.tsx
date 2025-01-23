import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header', () => {
  it('renders', () => {
    render(<Header text="Hello, world!" />);

    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });
});
