import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import './AddUser.css';

function AddUser(props) {
	const [enteredUsername, setEnteredUsername] =
		useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = e => {
		e.preventDefault();

		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			return;
		}

		if (+enteredAge < 1) {
			return;
		}

		console.log(enteredUsername, enteredAge);

		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = e => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = e => {
		setEnteredAge(e.target.value);
	};

	return (
		<Card className='user'>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					value={enteredUsername}
					onChange={usernameChangeHandler}
				/>
				<label htmlFor='age'>Age (Years)</label>
				<input
					type='number'
					id='age'
					value={enteredAge}
					onChange={ageChangeHandler}
				/>
			</form>
			<Button type='submit'>Add User</Button>
		</Card>
	);
}

export default AddUser;
