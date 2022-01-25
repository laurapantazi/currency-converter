import styled from "styled-components";

export const CustomFormElement = styled.input`
  width: 320px;
  height: 16px;
  font-size: 18px;
  border: 1px solid ${({theme}) => theme.text};
  color: ${({theme}) => theme.text};
  border-radius: .5rem;
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
`;

interface InputProps {
  readonly appearance?: string;
};

export const Input = styled(CustomFormElement).attrs({
  as: "input"
})<InputProps>`
  webkit-appearance: ${props => props.appearance || "textfield"};
  -moz-appearance: ${props => props.appearance || "textfield"};
  appearance: ${props => props.appearance || "textfield"};
`;
export const Select = styled(CustomFormElement).attrs({
  as: "select"
})`
  width: 100%;
  outline: 0;
  box-shadow: none;
  flex: 1;
  padding: 0 1em;
  cursor: pointer;
  height: 48px;
`;

export const Label = styled.label`
  position: absolute;
  top: -20px;
  font-weight: 500;
  font-size: 16px;
`;
export const FormElement = styled.div`
  width: 100%;
  position: relative;
  height: 48px;
  margin-bottom: 1.8rem;
`;