import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home welcome text', () => {
  render(<App />);
  const heading = screen.getByText(/welcome to real estate/i);
  expect(heading).toBeInTheDocument();
});
