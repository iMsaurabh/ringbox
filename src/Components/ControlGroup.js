import React, { useState } from 'react';
import './ControlGroup.css';

function ControlGroup(props) {
	const [powerButtonStyle, setPowerButtonStyle] = useState({ float: 'left' });
	function HandlePowerClick() {
		if (powerButtonStyle.float === 'right') {
			props.enableMusicCheck(true);
			setPowerButtonStyle({ float: 'left' });
		} else {
			props.enableMusicCheck(false);
			setPowerButtonStyle({ float: 'right' });
		}
	}

	return (
		<div className='ControlGroup d-flex flex-column justify-content-between align-items-center bg-dark'>
			<div className='SwitchContainer d-flex flex-column text-light align-items-center'>
				<label htmlFor='ToggleSwitch'>Power</label>
				<div
					className='ToggleSwitch bg-light'
					id='ToggleSwitch'
					onClick={HandlePowerClick}>
					<div
						className='ToggleButton bg-danger'
						style={powerButtonStyle}></div>
				</div>
			</div>
			<div id='display' className='MusicDisplay bg-light'>
				{props.keyDisplayText}
			</div>
			<input type='range' className='form-range' id='customRange1'></input>
			<div className='SwitchContainer d-flex flex-column text-light align-items-center'>
				<label htmlFor='ToggleSwitch'>Bank</label>
				<div className='ToggleSwitch bg-light' id='ToggleSwitch'>
					<div className='ToggleButton bg-primary'></div>
				</div>
			</div>
		</div>
	);
}
export default ControlGroup;
