import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

test('fetches and displays users', async () => {
    render(<UserList />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument());
});