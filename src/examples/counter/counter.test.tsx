//@vitest-environment happy-dom
import { screen, fireEvent } from '@testing-library/react';
import Counter from '.';

import { render } from './test/utilities';

test('it should render the component', () => {
  render(<Counter />);
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
  const Button = screen.getByRole('button', { name: 'Increment' });
  await user.click(Button);
  expect(currentCount).toHaveTextContent('1');
});
