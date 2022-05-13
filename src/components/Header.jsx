import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import '../styles/Header.css';

const Header = ({ darkmode, handleChange }) => {
	return (
		<>
			<div className='header'>
				<div id='title' className='title'>
					<h2>Lista de Tarefas</h2>
				</div>
				<div className='icon'>
					<LightModeIcon
						sx={darkmode ? { color: 'gray' } : { color: '#0f58e0c4' }}
					/>
				</div>
				<div className='darkmode-switch'>
					<Switch
						checked={darkmode}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
				</div>
				<div className='icon'>
					<DarkModeIcon color={darkmode ? 'primary' : 'disabled'} />
				</div>
			</div>
		</>
	);
};

export default Header;
