import ToggleButton from 'react-bootstrap/ToggleButton';
import {ToggleButtonGroup} from "react-bootstrap";

function SearchPreferenceToggle(props) {
  return (
      <ToggleButtonGroup onChange={props.handleSortingChoice} type={"radio"} name={"Search Preferences"} defaultValue={"Best Match"}>
          <ToggleButton id={"radio-1"} value={"Best Match"}>
              Best Match
          </ToggleButton>
          <ToggleButton id={"radio-2"} value={"Highest Rated"}>
             Highest Rated
          </ToggleButton>
          <ToggleButton id={"radio-3"} value={"Most Reviewed"}>
             Most Reviewed
          </ToggleButton>
      </ToggleButtonGroup>
  )
}

export default SearchPreferenceToggle;