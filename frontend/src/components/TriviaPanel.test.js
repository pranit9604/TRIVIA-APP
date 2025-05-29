import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TriviaPanel from '../components/TriviaPanel';

// Mock fetch globally
beforeEach(() => {
  global.fetch = jest.fn((url) => {
    let responseText = '';
    if (url.includes('/math')) responseText = 'Math trivia!';
    else if (url.includes('/date')) responseText = 'Date trivia!';
    else responseText = 'General trivia!';
    return Promise.resolve({
      text: () => Promise.resolve(responseText)
    });
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('TriviaPanel', () => {
  it('renders general number trivia', async () => {
    render(<TriviaPanel number="7" />);
    expect(await screen.findByText(/General Number Trivia/)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(/General trivia!/)).toBeInTheDocument());
  });

  it('renders date trivia for MM-DD', async () => {
    render(<TriviaPanel date="12-25" />);
    expect(await screen.findByText(/Date Trivia/)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(/Date trivia!/)).toBeInTheDocument());
  });

  it('renders date trivia for YYYY-MM-DD', async () => {
    render(<TriviaPanel date="2020-07-04" />);
    expect(await screen.findByText(/Date Trivia/)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(/Date trivia!/)).toBeInTheDocument());
  });

  it('renders math trivia', async () => {
    render(<TriviaPanel math="9" />);
    expect(await screen.findByText(/Math Trivia/)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(/Math trivia!/)).toBeInTheDocument());
  });

  it('renders all trivia sections if all props are provided', async () => {
    render(<TriviaPanel number="5" date="01-01" math="10" />);
    expect(await screen.findByText(/General Number Trivia/)).toBeInTheDocument();
    expect(await screen.findByText(/Date Trivia/)).toBeInTheDocument();
    expect(await screen.findByText(/Math Trivia/)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/General trivia!/)).toBeInTheDocument();
      expect(screen.getByText(/Date trivia!/)).toBeInTheDocument();
      expect(screen.getByText(/Math trivia!/)).toBeInTheDocument();
    });
  });

  it('does not render date section for invalid date', () => {
    render(<TriviaPanel date="invalid-date" />);
    expect(screen.queryByText(/Date Trivia/)).not.toBeInTheDocument();
  });

  it('shows error message if fetch fails', async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject());
    render(<TriviaPanel number="99" />);
    await waitFor(() => expect(screen.getByText(/Could not fetch trivia/)).toBeInTheDocument());
  });
});