import React, { useState } from 'react';
import './App.css';
import '../src/Components/DrumMachine.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from './Components/ButtonGroup';
import ControlGroup from './Components/ControlGroup';

function App() {
	const [musicCheck, setMusicCheck] = useState(false);
	const [displayText, setDisplayText] = useState('');

	function handleMusic(musicEnabled) {
		if (musicEnabled === true) {
			setMusicCheck(true);
		} else {
			setMusicCheck(false);
		}
	}
	function handleDisplayText(keyText) {
		setDisplayText(keyText);
	}

	const passKeyBoardInput = (key) => {
		console.log(key);
	};

	return (
		<div className='App' onKeyPress={passKeyBoardInput}>
			<div id='drum-machine' className='DrumMachine d-flex flex-row'>
				<ButtonGroup isMusicEnabled={musicCheck} keyText={handleDisplayText} />
				<ControlGroup
					enableMusicCheck={handleMusic}
					keyDisplayText={displayText}
				/>
			</div>
		</div>
	);
}

export default App;
