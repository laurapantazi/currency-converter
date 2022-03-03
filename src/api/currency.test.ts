import axios from 'axios';
import { getCurrency } from './currency';

jest.mock('axios');
const mockedAxios = jest.spyOn(axios, 'get');

describe('getCurrency', () => {
  beforeEach(() => {
    mockedAxios.mockClear();
  })

  it('should return the exchanging rate value', async () => {
    mockedAxios.mockImplementationOnce(() => Promise.resolve({ data: {data: {'EUR': 1}}}));
    const response = await getCurrency('EUR', 'EUR');
    expect(response).toEqual(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_CURRENCY_API}/latest?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}&base_currency=EUR`);
  })

  it('should handle exception with null', async () => {
    mockedAxios.mockRejectedValueOnce(() => Promise.reject(null));
    const response = await getCurrency('ERR', 'ERR');
    expect(response).toBe(null);
  })
})