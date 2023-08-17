import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face.png';
import './Logo.css';

const Logo = ()=> {
	return (
			<Tilt 
				style={{ height: 150, width: 150 }}
				className='Tilt ma4 mt0 br2 shadow-3 pa1'
			>
				<div>
					<img style={{paddingTop: '15px'}} alt='logo' src={face} />
				</div>
				<h className="white">FaceDETECT</h>
		    </Tilt>
	);
}


export default Logo;