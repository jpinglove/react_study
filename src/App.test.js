import { render, screen } from '@testing-library/react';
import App from './App';
import Hello from './App'

test('renders learn react link', () => {
  render(<Hello />);
  const linkElement = screen.getByText(/lea00rn react/i);
  expect(linkElement).toBeInTheDocument();
});
