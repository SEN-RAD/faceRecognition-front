import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face.png';

const Logo = ()=> {
	return (
			<Tilt 
				style={{ height: 150, width: 150, backgroundColor: 'darkgreen' }}
				className='ma4 mt0 br2 shadow-2 pa2'
			>
				<div>
					<img style={{paddingTop: '15px'}} alt='logo' src={face} />
				</div>
		    </Tilt>
	);
}


export default Logo;