import { useThemeModeContext } from "./ThemeModeContext";
import {SwitchWrapper, Checkbox, CheckboxSwitch, Label} from "./ThemeSwitch.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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