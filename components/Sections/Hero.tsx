import Image from 'next/image';
import Container from '../Container';
import illustration from '@/public/images/illustration-intro.svg';
import Heading from '../Heading';
import Button from '../Button';

const Hero = () => {
	return (
		<div className="mt-14">
			<Container>
				<div className="grid p-10 sm:p-6 gap-4 sm:grid-cols-2 ">
					<div className="flex items-center justify-center sm:col-start-2 ">
						<Image src={illustration} alt="illustration" />
					</div>
					<div className="text-center px-5 sm:col-start-1 sm:row-start-1 sm:text-start sm:px-1 md:pt-3">
						<Heading
							type="h1"
							text="  Bring everyone together to build better products.
"
							className=""
						/>
						<p className="mt-4 md:mt-5 text-gray-500 text-sm px-3 sm:px-0 sm:pr-4 mb-7 lg:pr-7">
							Manage makes it simple for software teams to plan day-to-day tasks
							while keeping the larger team goals in view.
						</p>
						<Button theme="dark">Get started</Button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Hero;
