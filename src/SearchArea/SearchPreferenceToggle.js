import ToggleButton from 'react-bootstrap/ToggleButton';
import {ToggleButtonGroup} from "react-bootstrap";
import {useState} from "react";

function SearchPreferenceToggle() {
    const [value, setValue] = useState(1);

    const handleChange = (val) => setValue(val);

    return (
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton id="tbg-btn-1" value={1}>
                Best Match
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={2}>
               Highest Rated
            </ToggleButton>
            <ToggleButton id="tbg-btn-3" value={3}>
               Most Reviewed
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default SearchPreferenceToggle;