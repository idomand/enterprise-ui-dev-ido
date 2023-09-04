//@vitest-environment happy-dom

import { screen } from '@testing-library/react';
import Counter from './index';
import { render } from './test/utilities';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', () => {
  const { user } = render(<Counter initialCount={5} />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('5');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const { user } = render(<Counter initialCount={7} />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('7');
  const resetButton = screen.getByRole('button', { name: /reset/i });
  await user.click(resetButton);
  expect(currentCount).toHaveTextContent('0');
});
