import { fireEvent, render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';

describe('<CurrencyForm />', () => {

  it('should render form elements correctly', async () => {
    render(<CurrencyForm />);

    const amountInputElement = screen.getByTestId(/amount/i);
    expect(amountInputElement).toBeInTheDocument();

    const fromCurrencySelectElement = screen.getByTestId(/from-currency/i);
    expect(fromCurrencySelectElement).toBeInTheDocument();

    const toCurrencySelectElement = screen.getByTestId(/to-currency/i);
    expect(toCurrencySelectElement).toBeInTheDocument();

    const submitButton = screen.getByTestId(/submit/i);
    expect(submitButton).toBeInTheDocument();
  })

  it('should be able to type in input amount', async () => {
    render(<CurrencyForm />);

    const amountInputElement = screen.getByTestId(/amount/i) as HTMLInputElement;
    fireEvent.change(amountInputElement, { target: { value: 22}});
    expect(amountInputElement.value).toBe('22');
  })

})