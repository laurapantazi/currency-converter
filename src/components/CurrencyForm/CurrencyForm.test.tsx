import { fireEvent, render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';

describe('<CurrencyForm />', () => {

  beforeEach(() => {
    render(<CurrencyForm />);
  })

  it('should be able to type in input number amount', () => {
    const amountInputElement = screen.getByTestId(/^amount$/i) as HTMLInputElement;
    expect(amountInputElement).toBeInTheDocument();

    fireEvent.change(amountInputElement, { target: { value: 22}});
    expect(amountInputElement.value).toBe('22');
  })

  it('should be able to render select element for initial currency', () => {
    const fromCurrencySelectElement = screen.getByTestId(/from-currency/i) as HTMLInputElement;
    expect(fromCurrencySelectElement).toBeInTheDocument();

    fireEvent.change(fromCurrencySelectElement, { target: { value: 'GBP'}});
    expect(fromCurrencySelectElement.value).toBe('GBP');
  })

  it('should be able to render select element for target currency', () => {
    const toCurrencySelectElement = screen.getByTestId(/to-currency/i) as HTMLInputElement;
    expect(toCurrencySelectElement).toBeInTheDocument();

    fireEvent.change(toCurrencySelectElement, { target: { value: 'GBP'}});
    expect(toCurrencySelectElement.value).toBe('GBP');
  })

  it('should be able to type in a name for saving this conversion', () => {
    const saveNameInputElement = screen.getByTestId(/^save-value$/i) as HTMLInputElement;
    expect(saveNameInputElement).toBeInTheDocument();
    fireEvent.change(saveNameInputElement, { target: { value: 'Euros to British Pounds'}});
    expect(saveNameInputElement.value).toBe('Euros to British Pounds');
  })

  it('should be able to render a convert button', () => {
    const submitButton = screen.getByTestId(/submit/i);
    expect(submitButton).toBeInTheDocument();
  })


})