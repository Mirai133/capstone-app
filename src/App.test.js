import React from 'react'
import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders the navbar with the correct text', () => {
    render(<BookingForm/>);

    const dateText = screen.getByText(/date/i);
    expect(dateText).toBeInTheDocument();

    const firstNameText = screen.getByText(/first name/i);
    expect(firstNameText).toBeInTheDocument();


    const lastNameText = screen.getByText(/last name/i);
    expect(lastNameText).toBeInTheDocument();

})

