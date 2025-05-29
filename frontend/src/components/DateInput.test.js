import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import DateInput from './DateInput';

// Mock debounce to call immediately
jest.mock('lodash.debounce', () => fn => {
  fn.cancel = jest.fn();
  return fn;
});

describe('DateInput', () => {
  it('renders input and label', () => {
    render(<DateInput value="" onChange={() => {}} />);
    expect(screen.getByLabelText(/Date \(MM-DD or YYYY-MM-DD\):/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e\.g\. 12-25 or 2020-12-25/)).toBeInTheDocument();
  });

  it('calls onChange with valid MM-DD', () => {
    const handleChange = jest.fn();
    render(<DateInput value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '12-25' } });
    expect(handleChange).toHaveBeenLastCalledWith('12-25');
    expect(screen.queryByText(/Enter date as/)).not.toBeInTheDocument();
  });

  it('calls onChange with valid YYYY-MM-DD', () => {
    const handleChange = jest.fn();
    render(<DateInput value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '2022-02-28' } });
    expect(handleChange).toHaveBeenLastCalledWith('2022-02-28');
    expect(screen.queryByText(/Enter date as/)).not.toBeInTheDocument();
  });

  it('shows error and calls onChange("") for invalid date', () => {
    const handleChange = jest.fn();
    render(<DateInput value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '13-40' } });
    expect(handleChange).toHaveBeenLastCalledWith('');
    expect(screen.getByText(/Enter date as MM-DD or YYYY-MM-DD/)).toBeInTheDocument();
  });

  it('shows error and calls onChange("") for empty input', () => {
    const handleChange = jest.fn();
    render(<DateInput value="12-25" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    expect(handleChange).toHaveBeenLastCalledWith('');
    expect(screen.queryByText(/Enter date as/)).not.toBeInTheDocument();
  });

  it('error disappears when valid input is entered after invalid', () => {
    const handleChange = jest.fn();
    render(<DateInput value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '99-99' } });
    expect(screen.getByText(/Enter date as MM-DD or YYYY-MM-DD/)).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '01-01' } });
    expect(screen.queryByText(/Enter date as/)).not.toBeInTheDocument();
    expect(handleChange).toHaveBeenLastCalledWith('01-01');
  });

  it('input value updates when prop changes', () => {
    const { rerender } = render(<DateInput value="12-25" onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe('12-25');
    rerender(<DateInput value="2020-01-01" onChange={() => {}} />);
    expect(input.value).toBe('2020-01-01');
  });
});