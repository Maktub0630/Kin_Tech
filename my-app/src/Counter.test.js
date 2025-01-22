import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter on button click', () => {
    render(<Counter />);
    const button = screen.getByText(/Increment/i);
    fireEvent.click(button);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});