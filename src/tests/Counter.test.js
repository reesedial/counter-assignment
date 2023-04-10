// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the render(<Counter />);
  const initialCount = screen.getByTestId(/count/i);
  expect(initialCount).toHaveTextContent('0');

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const addButton = screen.getByRole('button', {name: '+'});
  userEvent.click(addButton);
  const currCount = screen.getByTestId(/count/i);
  expect(currCount).toHaveTextContent('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const subtractButton = screen.getByRole('button', {name: '-'});
  userEvent.click(subtractButton);
  const currCount = screen.getByTestId(/count/i);
  expect(currCount).toHaveTextContent('-1');

});
