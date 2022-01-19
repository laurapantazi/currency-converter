import { useState, ChangeEvent, useEffect } from "react";
import currencies from '../../currencies.json';
import {Form} from "./Form";
import {FormElement, Input, Select, Label} from "./FormElements";
import { SubmitButton } from "./Buttons";

const axios = require('axios').default;

const CurrencyForm = () => {
    const [amount, setAmount] = useState<number>(0);
    const [fromCurrency, setFromCurrency] = useState<string>('EUR');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [conversionName, setConversionName] = useState<string>('');
    const [convertedAmount, setConvertedAmount] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    useEffect(() => {
      const x = amount * convertedAmount;
      setResult(x);
    }, [convertedAmount, amount])
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.REACT_APP_CURRENCY_API_KEY}&base_currency=${fromCurrency}`)
      .then((response: any) => {
        setConvertedAmount(response.data.data[toCurrency]);
      })
      .catch((err: any) => console.log('error: ', err))
    }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormElement>
          <Label>Amount:</Label>
          <Input type="number" min="0" step="0.01" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}/>
        </FormElement>
        
        <FormElement>
          <Label>From:</Label>
          <Select name="From" value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
            {Object.keys(currencies).map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </Select>
        </FormElement>

        <FormElement>
          <Label>To:</Label>
          <Select name="To" value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
            {Object.keys(currencies).map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </Select>
        </FormElement>

        
        <FormElement>
          <Label>Save as (Optional):</Label>
          <Input type="text" value={conversionName} onChange={e => setConversionName(e.target.value)}></Input>
        </FormElement>

        <SubmitButton type="submit">Convert</SubmitButton>
        <div>
          {amount} {fromCurrency} is equal to {result.toFixed(2)}  {toCurrency}
        </div>
      </Form>
    </>
  );
}

export default CurrencyForm;