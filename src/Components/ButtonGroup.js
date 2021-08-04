import './ButtonGroup.css';
import React, { useEffect, useCallback, useMemo } from 'react';

function ButtonGroup(props) {
	//const [playFile, setPlayFile] = useState(false);
	const musicKeyPair = useMemo(() => ({
		Q: 'Heater-1',
		W: 'Heater-2',
		E: 'Heater-3',
		A: 'Heater-4',
		S: 'Clap',
		D: 'Open HH',
		Z: `Kick n' Hat`,
		X: 'Kick',
		C: 'Closed HH',
	}));
	const playMusic = useCallback(
		(id) => {
			if (props.isMusicEnabled === true) {
				const audioEl = document.getElementById(id);
				audioEl.play();
				//console.log(musicKeyPair[id]);
				props.keyText(musicKeyPair[id]);
			}
		},
		[musicKeyPair, props]
	);

	useEffect(() => {
		const handleUserKeyPress = (event) => {
			const { key } = event;
			const existsIndex = [
				'Q',
				'W',
				'E',
				'A',
				'S',
				'D',
				'Z',
				'X',
				'C',
				'q',
				'w',
				'e',
				'a',
				's',
				'd',
				'z',
				'x',
				'c',
			].indexOf(key);

			if (existsIndex >= 0) {
				playMusic(key.toUpperCase());
			}
		};

		window.addEventListener('keydown', handleUserKeyPress);

		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
		};
	}, [playMusic]);

	return (
		<div className='buttonGroup'>
			<div className='bg-dark buttonRow topButtonRow'>
				<div
					id='div_Q'
					className='btn btn-light drum-pad text-center'
					onClick={() => playMusic('Q')}>
					Q
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
						className='clip'
						id='Q'></audio>
				</div>
				<div
					id='div_W'
					className='btn btn-light drum-pad'
					onClick={() => playMusic('W')}>
					W
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
						className='clip'
						id='W'></audio>
				</div>
				<div
					id='div_E'
					className='btn btn-light drum-pad'
					onClick={() => playMusic('E')}>
					E
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
						className='clip'
						id='E'></audio>
				</div>
			</div>
			<div className='bg-dark buttonRow'>
				<div
					id='div_A'
					className='btn btn-light drum-pad'
					onClick={() => playMusic('A')}>
					A
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
						className='clip'
						id='A'></audio>
				</div>
				<div
					id='div_S'
					className='btn btn-light drum-pad'
					onClick={() => playMusic('S')}>
					S
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
						className='clip'
						id='S'></audio>
				</div>
				<div
					id='div_D'
					className='btn btn-light drum-pad'
					onClick={() => playMusic('D')}>
					D
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
						className='clip'
						id='D'></audio>
				</div>
			</div>
			<div className='bg-dark buttonRow bottomButtonRow'>
				<div
					id='div_Z'
					className='btn btn-light drum-pad'
					onClick={() => playMusic('Z')}>
					Z
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
						className='clip'
						id='Z'></audio>
				</div>
				<div
					id='div_X'
					className='btn btn-light drum-pad'
					onClick={() => playMusic('X')}>
					X
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
						className='clip'
						id='X'></audio>
				</div>
				<div
					id='div_C'
					className='btn btn-light drum-pad'
					onClick={() => playMusic('C')}>
					C
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
						className='clip'
						id='C'></audio>
				</div>
			</div>
		</div>
	);
}
export default ButtonGroup;
