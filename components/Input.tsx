'use client';
import React, { useState } from 'react';

function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

const Input = () => {
	const [error, setError] = useState(false);

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // Corrected the capitalization of 'preventDefault'
		const email = new FormData(e.currentTarget).get('email') as string; // Type assertion to string
		console.log(email);
		if (!isValidEmail(email)) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<form onSubmit={submit}>
			<span className="relative">
				<input
					type="text"
					name="email"
					required
					onChange={() => setError(false)}
					placeholder="update your email..."
					className="px-3 py-2 caret-p-red focus:outline-none focus:ring focus:ring-pale-red hover:bg-pale-red/80 text-d-gray bg-l-gray rounded-full"
				/>
				{error && (
					<span className="text-p-red text-xs font-semibold absolute top-full mt-4 left-1">
						error:invalid email
					</span>
				)}
			</span>
		</form>
	);
};

export default Input;
