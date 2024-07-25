import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className={` xs:mx-2 ssm:mx-8 sw:mx-16 md:mx-24 lg:32 `}>
			{children}
		</section>
	);
};

export default Container;
