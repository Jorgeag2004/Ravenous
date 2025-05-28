import ToggleButton from 'react-bootstrap/ToggleButton';
import {ToggleButtonGroup} from "react-bootstrap";

function SearchPreferenceToggle() {
  return (
      <ToggleButtonGroup type={"radio"} name={"Search Preferences"} defaultValue={1}>
          <ToggleButton id={"radio-1"} value={1}>
              Best Match
          </ToggleButton>
          <ToggleButton id={"radio-2"} value={2}>
             Highest Rated
          </ToggleButton>
          <ToggleButton id={"radio-3"} value={3}>
             Most Reviewed
          </ToggleButton>
      </ToggleButtonGroup>
  )
}

export default SearchPreferenceToggle;