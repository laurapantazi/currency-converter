import { useThemeModeContext } from "./ThemeModeContext";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const SwitchWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
`
const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
`;
const Label = styled.label`
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

  & > .fa-moon {
    color: #fed24f;
  }
  & > .fa-sun {
    color: #feb54f;
    position: absolute;
    right: 4px;
  }
`;
const CheckboxSwitch = styled.div`
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

  export function ThemeMode () {
  const {darkTheme, toggleTheme} = useThemeModeContext();

  const changeTheme = () => {
    toggleTheme();
  }

  return (
    <SwitchWrapper>
      <Checkbox type="checkbox" id="checkbox" onChange={changeTheme} />
      <Label htmlFor="checkbox">
        <FontAwesomeIcon icon={faMoon} size={'1x'} />
        <FontAwesomeIcon icon={faSun} />
        <CheckboxSwitch className={`circle ${darkTheme? 'move-right' : 'move-left'}`}></CheckboxSwitch>
      </Label>
    </SwitchWrapper>
  )
}