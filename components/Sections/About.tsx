import { icons, list } from '@/constants';
import Container from '../Container';
import Heading from '../Heading';
import Button from '../Button';
import Image from 'next/image';

const About = () => {
	return (
		<div className="my-14 relative">
			<Image
				src={icons.bgMobile}
				alt="bg"
				fill
				className="object-cover object-left z-0"
			/>

			<Container>
				<div className="z-1 grid md:grid-cols-5 md:gap-3">
					<div className="text-center ssm:text-start space-y-4 py-4 px-8 col-span-2">
						<Heading
							text="What's different about Manage?"
							type="h2"
							className=""
						/>
						<p className=" text-sm text-gray-500 ">
							Manage provides all the functionality your team needs, without the
							complexity. Our software is tailor-made for modern digital product
							teams.
						</p>
					</div>
					<div className=" col-span-3 py-4 px-3 flex flex-col gap-4 sm:gap-6 md:gap-4">
						{list.map((item) => (
							<div key={item.title} className="space-y-3">
								<div className="bg-pale-red rounded-full flex gap-4 items-center">
									<Button theme="dark">Go</Button>
									<Heading text={item.title} className="" type="h3" />
								</div>
								<p className="text-gray-500  px-6 text-sm sm:pr-5 md:pr-2 ">
									{item.body}
								</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default About;
