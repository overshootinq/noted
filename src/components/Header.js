import { useState } from 'react';
import darkModeIcon from "../assets/icons/dark_mode_icon.svg"
import lightModeIcon from "../assets/icons/light_mode_icon.svg"

const Header = ({ handleToggleDarkMode }) => {
    const [toggled, setToggled] = useState(false)

    const setIconToggle = () => {
        setToggled(!toggled)
    }

    const handleClick = () => {
        handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        setIconToggle()
    }

	return (
		<div className='header'>
			<h1>Noted.</h1>
			<button onClick={handleClick} className='toggle-button'>
            <img className="toggle-icon" src={toggled === true ? darkModeIcon : lightModeIcon} alt="Toggle icon"/>
			</button>
		</div>
	);
};

export default Header;