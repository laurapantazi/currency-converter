import axios from 'axios';

export const getCurrency = async (fromCurrency: string, toCurrency: string) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_CURRENCY_API}/latest?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}&base_currency=${fromCurrency}`)
    return response.data.data[toCurrency];
  } catch (error) {
    return null;
  }
}