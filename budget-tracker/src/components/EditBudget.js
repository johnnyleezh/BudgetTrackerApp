import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const EditBudget = () => {
    const { dispatch } = useContext(AppContext);

    const [budget, setBudget] = useState('');

    const onSubmit = (event) => {
		event.preventDefault();

		const newBudget = parseInt(budget);

		dispatch({
			type: 'EDIT_BUDGET',
			payload: newBudget,
		});
	};

    return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Edit Budget</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='budget'
                        value={budget}
						onChange={(event) => setBudget(event.target.value)}
					></input>
				</div>
				
			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
            </div>
		</form>
	);
};

export default EditBudget;