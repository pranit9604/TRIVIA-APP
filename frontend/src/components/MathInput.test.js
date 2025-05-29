import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MathInput from '../components/MathInput';

// Mock debounce to call immediately
jest.mock('lodash.debounce', () => fn => {
  fn.cancel = jest.fn();
  return fn;
});

describe('MathInput', () => {
  it('renders input and label', () => {
    render(<MathInput value="" onChange={() => {}} />);
    expect(screen.getByLabelText(/Math Number:/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e\.g\. 35/)).toBeInTheDocument();
  });

  it('calls onChange with valid number', () => {
    const handleChange = jest.fn();
    render(<MathInput value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '123' } });
    expect(handleChange).toHaveBeenLastCalledWith('123');
    expect(screen.queryByText(/Please enter a valid number/)).not.toBeInTheDocument();
  });

  it('shows error and calls onChange("") for invalid input', () => {
    const handleChange = jest.fn();
    render(<MathInput value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(handleChange).toHaveBeenLastCalledWith('');
    expect(screen.getByText(/Please enter a valid number/)).toBeInTheDocument();
  });

  it('shows no error and calls onChange("") for empty input', () => {
    const handleChange = jest.fn();
    render(<MathInput value="123" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    expect(handleChange).toHaveBeenLastCalledWith('');
    expect(screen.queryByText(/Please enter a valid number/)).not.toBeInTheDocument();
  });

  it('error disappears when valid input is entered after invalid', () => {
    const handleChange = jest.fn();
    render(<MathInput value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(screen.getByText(/Please enter a valid number/)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '42' } });
    expect(screen.queryByText(/Please enter a valid number/)).not.toBeInTheDocument();
    expect(handleChange).toHaveBeenLastCalledWith('42');
  });

  it('input value updates when prop changes', () => {
    const { rerender } = render(<MathInput value="35" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('35');
    rerender(<MathInput value="99" onChange={() => {}} />);
    expect(input.value).toBe('99');
  });
});