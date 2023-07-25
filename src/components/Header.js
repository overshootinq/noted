import darkModeIcon from "../assets/icons/dark_mode_icon.svg"
import lightModeIcon from "../assets/icons/light_mode_icon.svg"

const Header = ({ handleDarkMode, darkMode}) => {

	return (
		<div className='header'>
			<h1>Noted.</h1>
			<button onClick={handleDarkMode} className='toggle-button'>
            <img className="toggle-icon" src={darkMode === true ? darkModeIcon : lightModeIcon} alt="Toggle icon"/>
			</button>
		</div>
	);
};

export default Header;