import React, { Component } from 'react';
import './InputForm.css';
import info from './info.png';

class InputForm extends Component {
	constructor() {
		super();
		this.state = {
			visible: false
		}
	}

	render() {
		const { onInputChange, onButtonSubmit } = this.props;
		const { visible } = this.state;
		return (
			<div>
				<div className='flex items-center justify-center'>
					<p className='f3 b'>
						This app detects faces in photographs. Give it a try!
					</p>
					<img
						src={info}
						alt='Icon'
						className='ml3 grow-large pointer'
						style={{ width: '30px', height: '30px' }}
						onClick={() => { this.setState({ visible: !visible }); }}
					/>
				</div>
				{visible ? (
					<div className='br3 mb3 ph3 pv2 dib white bg-light-purple shadow-5 '>
						<p className='f5'>
							1. Find a picture of a face (for example, on Google or Freepik.)
						</p>
						<p className='f5'>
							2. Right-click and open image in new tab.
						</p>
						<p className='f5'>
							3. Copy and paste image url link and click on Detect Face.
						</p>
						<p className='f5'>
							NOTE: the url link must end in jpg or png.
						</p>
					</div>
				) : null}
				<div className="center">
					<div className='form center pa4 br3 shadow-5'>
						<input
							className='f4 pa2 w-70 center'
							type='text'
							onChange={onInputChange}
						/>
						<button
							className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
							onClick={onButtonSubmit}
						> Detect Face </button>
					</div>
				</div>
			</div>
		);
	}
}

export default InputForm;