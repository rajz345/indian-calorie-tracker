import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Indian Calorie Tracker app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Indian Calorie Tracker/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation buttons', () => {
  render(<App />);
  const trackerButton = screen.getByRole('button', { name: /Tracker/i });
  const analyticsButton = screen.getByRole('button', { name: /Analytics/i });
  expect(trackerButton).toBeInTheDocument();
  expect(analyticsButton).toBeInTheDocument();
});

test('renders search section', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search Indian dishes/i);
  expect(searchInput).toBeInTheDocument();
});

test('renders date navigation', () => {
  render(<App />);
  const todayButton = screen.getByRole('button', { name: /Today/i });
  expect(todayButton).toBeInTheDocument();
});

test('renders meal categories', () => {
  render(<App />);
  // Check for filter dropdown
  const categoryFilter = screen.getByDisplayValue(/All Categories/i);
  expect(categoryFilter).toBeInTheDocument();
});

test('tracker tab is active by default', () => {
  render(<App />);
  const trackerButton = screen.getByRole('button', { name: /Tracker/i });
  expect(trackerButton).toHaveClass('active');
});
