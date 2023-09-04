import { render, screen } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText(/New Item Name/i);
});

it('has a "Add New Item" button that is disabled when the input is empty', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText(/New Item Name/i);
  const addNewItemButton = screen.getByRole('button', {
    name: /Add New Item/i,
  });
  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
  await user.type(newItemInput, 'abc');
  expect(addNewItemButton).not.toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText(/New Item Name/i);
  const addNewItemButton = screen.getByRole('button', {
    name: /Add New Item/i,
  });
  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDisabled();
  await user.type(newItemInput, 'abc');
  expect(addNewItemButton).not.toBeDisabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText(/New Item Name/i);
  const addNewItemButton = screen.getByRole('button', {
    name: /Add New Item/i,
  });
  await user.type(newItemInput, 'abc test');
  await user.click(addNewItemButton);
  expect(screen.getByLabelText('abc test')).not.toBeChecked();
});
