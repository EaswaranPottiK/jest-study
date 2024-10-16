import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('to check textbox',()=>{
  render(<App/>)
  // for input type text you type textbox
  let checkBox = screen.getByRole("textbox")
  expect(checkBox).toBeInTheDocument()
  expect(checkBox).toHaveAttribute("class","username")//similarly you can do for id, type, value
  let checkBoxText = screen.getByPlaceholderText("Enter a name")
  expect(checkBoxText).toBeInTheDocument()
})