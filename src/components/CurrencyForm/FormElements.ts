import styled from "styled-components";

export const CustomFormElement = styled.input`
  font-size: 18px;
  border: none;
  color: ${({theme}) => theme.text};
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
  width: calc(100% - 100px);
`;
export const Select = styled(CustomFormElement).attrs({
  as: "select"
})`
  width: 100px;
  outline: 0;
  box-shadow: none;
  flex: 1;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
`;

export const Label = styled.label`
  position: absolute;
  top: -24px;
  font-weight: 500;
  font-size: 16px;
`;
export const FormElement = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 60px;
  margin-bottom: 2.8rem;
  background: rgba(50, 69, 115, 0.3);
  border-radius: 1rem;
  padding: 0 12px;
  box-sizing: border-box;
`;

export const ResultDiv = styled.div`
  width: calc(100% - 100px);
  font-size: 18px;
  line-height: 26px;
  border: none;
  color: ${({theme}) => theme.text};
  outline: none;
  padding: 1rem;
  background: none;
  z-index: 1;
`;