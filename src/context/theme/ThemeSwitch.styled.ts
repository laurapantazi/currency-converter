import styled from "styled-components";

export const SwitchWrapper = styled.div`
position: absolute;
top: 20px;
right: 24px;
`
export const Checkbox = styled.input`
opacity: 0;
position: absolute;
`;
export const Label = styled.label`
width: 46px;
height: 18px;
background-color: #676FA3;
display: flex;
border-radius:50px;
align-items: center;
justify-content: space-between;
padding: 4px;
position: relative;
transform: scale(1.5);
cursor: pointer;

& > .fa-moon {
  color: #fed24f;
}
& > .fa-sun {
  color: #feb54f;
  position: absolute;
  right: 4px;
}
`;
export const CheckboxSwitch = styled.div`
width: 17px;
height: 17px;
background-color: white;
border-radius: 50%;
transition: transform .2s;
&.move-left {
  transform: translateX(-28px);
}
&.move-right {
  transform: translateX(0px);
}
`;