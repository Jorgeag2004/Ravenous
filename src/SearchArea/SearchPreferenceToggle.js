import ToggleButton from 'react-bootstrap/ToggleButton';
import {ToggleButtonGroup} from "react-bootstrap";

function SearchPreferenceToggle(props) {
  return (
      <ToggleButtonGroup onChange={props.handleSortingChoice} type={"radio"} name={"Search Preferences"} defaultValue={"best_match"}>
          <ToggleButton id={"radio-1"} value={"best_match"}>
              Best Match
          </ToggleButton>
          <ToggleButton id={"radio-2"} value={"rating"}>
             Highest Rated
          </ToggleButton>
          <ToggleButton id={"radio-3"} value={"review_count"}>
             Most Reviewed
          </ToggleButton>
      </ToggleButtonGroup>
  )
}

export default SearchPreferenceToggle;