import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import currencies from '../../currencies.json';
import {Form} from "./Form.styled";
import {FormElement, Input, Select, Label, ResultDiv} from "./FormElements.styled";
import { SubmitButton } from "./Buttons.styled";
import { getCurrency } from "../../api/currency";

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
    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const response = await getCurrency(fromCurrency, toCurrency);
      setConvertedAmount(response);
    }

    const preventStrings = (event: KeyboardEvent<HTMLInputElement>) => { 
      if ((event.key !== "Backspace") && (isNaN(parseInt(event.key)))) {
        event.preventDefault();
        return false
      }
      return;
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormElement>
          <Input appearance="textfield" data-testid="amount" type="number" min="0" step="0.01" value={amount || ''} onKeyDown={preventStrings} onChange={(e) => setAmount(parseFloat(e.target.value))}/>
          <Select name="From" data-testid="from-currency" value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
            {Object.keys(currencies).map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </Select>
        </FormElement>

        <FormElement>
          <ResultDiv>
            {result.toFixed(2)}
          </ResultDiv>
          <Select name="To" data-testid="to-currency" value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
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

        <SubmitButton data-testid="submit" type="submit">Convert</SubmitButton>
      </Form>
    </>
  );
}

export default CurrencyForm;