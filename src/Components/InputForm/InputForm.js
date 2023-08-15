import React from 'react';
import './InputForm.css';

const InputForm = ({ onInputChange, onButtonSubmit })=> {
	return (
		<div>
			<p className= 'f3'>	
				{'This app detects faces in photographs. Paste a link to your photo and give it a try!'}
			</p>
				<div className ="center">
					<div className= 'form center pa4 br3 shadow-5'>
						<input 
							className='f4 pa2 w-70 center' 
							type= 'text' 
							onChange={onInputChange}
						/> {/*onChange here has nothing to do with onInputChange name, it is a synthactic event in React*/} 
						<button 
							className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
							onClick={onButtonSubmit}
						> Detect Face </button>
					</div>
				</div>
		</div>
	);
}


export default InputForm;