import React from 'react';

const Button = ({
	theme,
	children,
}: {
	theme: string;
	children: React.ReactNode;
}) => {
	return (
		<button
			className={`px-4 py-2 rounded-full text-sm font-semibold ${
				theme === 'dark'
					? 'bg-p-red text-pale-red hover:bg-p-red/80  '
					: 'bg-pale-red text-p-red hover:bg-pale-red/80'
			}`}
		>
			{children}
		</button>
	);
};

export default Button;
