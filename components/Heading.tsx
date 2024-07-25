import React from 'react';

const Heading = ({
	type,
	text,
	className,
}: {
	type: string;
	text: string;
	className: string;
}) => {
	return (
		<h1
			className={`${className}
      ${type === 'h1' && 'text-3xl text-gray-950 leading-none font-bold'}
      ${type === 'h2' && 'text-2xl text-gray-900 leading-none font-semibold'}
      ${type === 'h3' && 'text-xl text-gray-900 leading-3 font-semibold '}
      `}
		>
			{text}
		</h1>
	);
};

export default Heading;
