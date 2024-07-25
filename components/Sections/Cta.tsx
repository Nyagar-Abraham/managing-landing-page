import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Button from '../Button';

const Cta = () => {
	return (
		<div className="bg-p-red text-gray-50 py-10">
			<Container>
				<div className="flex flex-col md:flex-row gap-6">
					<div className="p-4 text-center md:text-start">
						<Heading
							className="!text-gray-50"
							text="Simplify how your team works today."
							type="h2"
						/>
					</div>
					<div className="flex items-center flex-1 justify-center">
						<Button theme="light">Get started</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Cta;
